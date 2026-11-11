"""Phase 4: local static-host delivery smoke test (not browser acceptance).
Tests that GitHub Pages-equivalent static routes serve the app and critical assets.
"""
from __future__ import annotations
import functools
import http.server
import pathlib
import threading
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parents[1]
class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *_args):
        pass

def main():
    handler = functools.partial(QuietHandler, directory=str(ROOT))
    server = http.server.ThreadingHTTPServer(("127.0.0.1", 0), handler)
    worker = threading.Thread(target=server.serve_forever, daemon=True)
    worker.start()
    paths = [
        ("index.html", b"Business Academy"),
        ("app-v28.js", b"coursePlans"),
        ("desktop-executive.css", b"@media"),
        ("learning/core-v110.js", b"BALearning"),
        ("learning/workspace-v46.js", b"data-learn-grade"),
        ("learning/level3-advanced-v73.js", b"Level 3"),
        ("learning/level4-independent-transfer-v138.js", b"BAL4V138"),
        ("learning/level5-numeric-v125.js", b"BAL5V125"),
        ("learning/workload-audit-v130.js", b"BAWorkloadAudit"),
    ]
    try:
        for route, marker in paths:
            url = "http://127.0.0.1:%d/%s" % (server.server_address[1], route)
            with urllib.request.urlopen(url, timeout=5) as response:
                raw = response.read()
                assert response.status == 200, route
                assert marker in raw, "%s missing expected content" % route
                assert len(raw) > 100, route
            print("PASS route", route, len(raw))
        # Exhaustively request each local script / stylesheet declared by the
        # real index, not just a curated subset. A missing asset can otherwise
        # make the installed Home Screen app appear blank.
        import re
        html = (ROOT / "index.html").read_text()
        linked_assets = re.findall(r'<script[^>]+src="([^"]+)"', html)
        linked_assets += re.findall(r'<link[^>]+href="([^"]+)"', html)
        checked = set(route for route, _ in paths)
        for raw_asset in linked_assets:
            asset = raw_asset.split("?", 1)[0]
            if asset.startswith(("https://", "http://", "//", "data:")) or asset in checked:
                continue
            if not asset.endswith((".js", ".css", ".webmanifest", ".json")):
                continue
            assert ".." not in asset.split("/"), asset
            url = "http://127.0.0.1:%d/%s" % (server.server_address[1], asset.lstrip("./"))
            with urllib.request.urlopen(url, timeout=5) as response:
                raw = response.read()
                assert response.status == 200, asset
                assert len(raw) > 20, asset
            checked.add(asset)
        assert len(checked) >= 90, "Unexpectedly few index-linked assets verified"
        print("PASS all referenced static routes:", len(checked))
        html = (ROOT / "index.html").read_text()
        assert "name=\"viewport\"" in html
        assert "desktop-executive.css" in html
        assert html.index("learning/core-v110.js") < html.index("learning/workspace-v46.js")
        assert html.index("learning/level4-independent-transfer-v138.js") < html.index("learning/workspace-v46.js")
        print("PASS static delivery and responsive entrypoint; NOT physical-device or interactive browser certification")
    finally:
        server.shutdown()
        server.server_close()

if __name__ == "__main__":
    main()
