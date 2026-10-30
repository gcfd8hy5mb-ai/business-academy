# Cloud progress sync foundation

Status: design only. No Firebase project configured or live sync enabled.

## Current state confirmed
- `app-v28.js` loads/saves `business-academy-v1` in browser localStorage.
- Other course-specific persistence sites need full inventory prior to migrating.
- Law Academy has multiple localStorage keys, including progress, exams, writing, and capstones.
- Ethical Hacking Academy does not yet have an identified repo. Plan for two distinct students.

## Architecture
Use one Firebase Authentication project and each user's own Firestore records under `users/{uid}/academies/{academyId}/snapshots/{storageKey}`, with academy IDs `business`, `law`, `ethical-hacking`. Each student has a unique UID. Store versioned JSON and server timestamps. Deny all cross-user access via Firestore security rules and emulator tests. Do not put service-account secrets in client code.

## Before implementation
1. Inventory all localStorage and IndexedDB keys and save handlers in each app.
2. Export and preserve existing device progress before login/import.
3. On first login, check both local and remote data. Never silently overwrite either; offer import or conflict resolution.
4. Keep offline local saves; queue sync and display Saved locally / Syncing / Synced / Error statuses.
5. Validate individual student isolation, sign in/out, new device, iPhone Safari and Home Screen web-app behavior.
6. Test database rules and add automated migration tests before enabling production writes.
7. Keep existing app design, lesson content, grades and simulator behavior unchanged.

## Security baseline for emulator tests
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid}/academies/{academyId}/snapshots/{storageKey} {
      allow read, write: if request.auth != null
        && request.auth.uid == uid
        && academyId in ['business', 'law', 'ethical-hacking'];
    }
  }
}
```
Production rules also need field validation and data size limits; large snapshots must be split to fit Firestore document limits.
