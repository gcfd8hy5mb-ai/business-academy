# Business Academy — shared academy authentication discovery (2026-11-02)

## Verified from GitHub
- Ethical Hacking Academy already uses **Firebase Authentication**, project `academy-cloud-4132c` (`firebase-config.js`, `auth.js`). Its login screen explicitly says to use the same Firebase student account as Business Academy and Law Academy.
- The Ethical Hacking login screen also explicitly states: “Coursework currently saves on this device; cloud progress sync is not yet enabled here.”
- Current Business Academy `index.html` has no authentication script; `learning/workspace-v40.js` stores coursework in localStorage.
- The checked Law Academy `index.html` also has no login script. The existing projects could be hosted behind Cloudflare, but hosting is not evidence of cloud data synchronization.
- No Cloudflare Worker endpoint or D1/KV binding for *academy progress* has been located in the checked repository files. Do not assume its URL or reuse Tablewise/Kroger infrastructure.

## Corrected integration strategy
1. **Do not activate the previously staged Supabase transport** (`learning/cloud-transport-v150.js`) or schema (`docs/business-academy-cloud-schema.sql`). They are unreferenced preparatory files, not the verified academy backend.
2. Confirm whether Cloudflare is hosting only, or whether an existing shared Cloudflare Worker/D1/KV stores account progress. If it does, find its actual endpoint and authorization rules; use it rather than creating a second student account system.
3. Reuse the academy's **existing Firebase account identity**, verified by `getIdToken()`, if a Cloudflare Worker backs data storage; verify Firebase ID tokens on the Worker server, including signature, issuer, audience, expiry, and user identifier.
4. Keep existing localStorage records (`business-academy-learning-v1` and `business-academy-v1`) intact until backed up and safely merged with account data. Never overwrite newer device work or silently move progress between student accounts.
5. Implement verified, authenticated and conflict-safe cloud writes, sign-in/out, offline sync queue and a “saved locally / synced” indicator, then validate real two-device restoration.

**Current status:** Account sign-in works in Ethical Hacking; this does not prove cloud progress saving works in any academy. Business Academy progress sync is not yet enabled.
