# Business Academy

Dependency-free static application for a five-level, 26-course executive learning path. Serve this directory with any static server; `index.html` loads the versioned application and shared learning modules. Existing progress remains in its original browser storage key.

## Development

```sh
python -m http.server 8765
node --test tests/*.test.cjs
```

Optional browser smoke test (requires Playwright and installed Chromium):

```sh
node tests/browser.cjs
```

That script uses `CODEX_PRIMARY_RUNTIME_NODE_MODULES` when available, otherwise a local `playwright` installation. It checks a 390px touch viewport. Automated Chromium tests do not replace a real iPhone Safari check.

See [coursework delivery and outstanding requirements](docs/COURSEWORK_DELIVERY.md) and [content authoring contract](docs/AUTHORING.md).
