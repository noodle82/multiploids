# Put Multiploids on GitHub

Use a separate repository named multiploids. Keep the existing Spelloids/practimals repository unchanged.

1. Create a public repository at https://github.com/new (name: multiploids; adding a README is fine).
2. Extract multiploids-github-upload-batches.zip.
3. In GitHub choose Add file → Upload files. Open 01-main-files locally and drag everything INSIDE it into the upload area. Commit changes. Do not upload the 01-main-files folder itself. index.html must appear at the repository top level.
4. Start a new upload at the repository top level. Open 02-base-audio locally and drag its audio folder into GitHub. Commit.
5. Start a third upload at the repository top level. Open 03-heart-audio locally and drag its audio folder into GitHub. Commit. This merges audio/heart into the existing audio folder.
6. Open Settings → Pages. Under Build and deployment choose Deploy from a branch, main and /(root), then Save.

Each batch contains fewer than 100 files. Upload extracted files, not the ZIP. All three uploads start from the repository root. Do not upload the numbered batch folders themselves.

The result should include:

- index.html, app.js, sw.js, style.css, space.css and rewards.css at the top level
- audio/keep-going.wav and the other base clips
- audio/heart/keep-going.wav and the other Heart clips
- vendor and fonts at the top level

After Pages deploys, use the site link displayed in Settings → Pages. If your username is noodle82 and the repository name is multiploids, the expected link is https://noodle82.github.io/multiploids/. This package has not been uploaded automatically.
