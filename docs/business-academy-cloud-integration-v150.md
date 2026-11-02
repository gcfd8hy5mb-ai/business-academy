# Business Academy — cloud progress integration (staged, not live)

## Confirmed existing implementation
The academy currently stores learning progress at `business-academy-learning-v1` and simulator progress at `business-academy-v1` in browser localStorage. The current static application contains no integrated sign-in or cloud saving code. **Cloud synchronization is not currently active.**

The connected Supabase account showed only PRISM and CostRig projects, not an identifiable Business Academy project. Do not deploy the academy schema to another product's database without explicit confirmation.

## Prepared for a correct backend
- `docs/business-academy-cloud-schema.sql` provides a dedicated user-owned table with RLS policies for SELECT, INSERT and UPDATE.
- `learning/cloud-transport-v150.js` provides authenticated REST reads, first-time uploads and compare-and-set writes using a server revision.
- No service-role key is needed or allowed in the browser.
- No scripts are activated in index.html before an appropriate project and real sign-in session are identified.

## Required activation steps
1. Identify the actual **Business Academy authentication provider and cloud project**, or explicitly choose to create one.
2. Provision the schema in that project. Verify RLS with two independent test accounts; confirm cross-user reads and writes fail.
3. Connect the application's real login/logout session to the transport using the project's public publishable key and an access-token callback.
4. Build a safe initial-import prompt on the iPhone that creates a local downloadable backup and lets the user review cloud-versus-device differences before first upload. Do **not** replace local drafts with an older cloud snapshot.
5. Add per-course or per-field revision/conflict resolution, offline write queue, account-switch handling and error/status UI. The staged transport currently rejects stale writes instead of silently overwriting them.
6. Run authenticated two-device tests before claiming cross-device sync, including long portfolios, exam attempts, offline saves and restoration.

**Do not tell students “Saved to cloud” until the server confirms the write. Do not silently upload local progress to a newly signed-in account or copy it between accounts.**
