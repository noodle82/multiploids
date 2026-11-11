# Multiploids v0.3 validation — 11 November 2026

Run npm test, or node --test tests/*.test.js. All 30 domain tests pass. They cover chosen-table boundaries, independent ship checks, retry rewards, saved progress, final twelve-in-a-row checks, local-day relaunch rules, targeted recap, free/unlocked Starbase games, and Cosmo streak bookmarks.

Actual browser interaction checks:

- Completed Rocket Fuel using all twelve own-table facts; confirmed completion prioritises Back to ship, hides replay until launch, and disables the prepared module card.
- Failed a launch after four correct answers; recap contained only the eight missed/unreached facts. Prepared systems stayed ready. A new shuffled twelve-correct check lit all lamps, held the twelfth, launched, showed the green checked ship and unlocked its named Starbase game.
- Twelve distinct vertical lights ascend from bottom to top. Rocket shake/smoke increases with correct answers. Desktop and 320/390px phone tower layouts inspected; the phone stage was enlarged to keep the complete tower visible.
- Cosmo Hop displays and resumes its current streak at the next fact. A wrong answer spins the creature fully below the screen before showing results.
- Both starter games work before any launch. Constellation Pairs was completed. Real Meteor Dash loss showed large replay/return actions. All fourteen games mounted; moonling rescue, ordered star trail, planet lines and alien art completed via their game controls.
- Real array dragging and counted orbit-star groups were rechecked. A typed product alone cannot pass the hands-on construction check. One retry and residual facts remain intact.
- Orbit, Comet and Lunar bodies render in 3D. Only Heart 2 and Little Monster are offered for new characters. Confirmed choices save. Radar, fitted flight clothing and helmet rendered together.
- Mission Control and workshop checked at 1366, 1024, 820, 390 and 320px with no horizontal overflow. Zero runtime exceptions in passing runs.

Offline validation disabled network access and reloaded the final build. All 173 cached requests were available, including the new games, styling, pitch processor and both speech banks. Actual Heart 2 and Little Monster number phrases played from local buffers, at playbackRate 1. There are 140 WAV clips; Heart is a genuinely separate af_heart bank, with approved tone processing. No paid speech or word service is used.

Existing v0.2 validation also exercised a next-day relaunch, a full mixed-table check, full read-aloud start/stop and all twelve lines. The domain regression tests still enforce those rules.

This is desktop-browser and simulated-viewport validation. A physical iPad and subjective voice clarity should still be tried with your daughter. The build has not been uploaded to GitHub or Apple. Saved data stays local to each browser/device.

## v0.3.1
31 automated checks including encouragement variety across saved sessions. The fixed ring is removed from Orbit. Seven new phrases per bank bring the total to 154 local WAV clips. Browser checks exercise actual varied praise and render the plain Orbit body.

Final v0.3.1 cache contains 187 requests. The character camera fits the wide body within narrow preview cards.

## v0.3.2 touch interaction fix
Simulated touch and real pointer events checked hold-to-purr, release, cancellation, single tap, double tap and desktop hold. Canvas dragging, touch callouts and selection are blocked on the creature only. No second canvas appeared. Safari/iPad hardware still needs user verification.

## v0.4 checks
32 domain tests pass, including compact fleet selection. Browser checks covered expand/collapse with all twelve selected tables, keeping the active rocket visible, five independent partial-progress strips, all seven practice/mixed views at 820/1024/390/320px, bottom-left exits, and fuel-cell wording. The final twelve correct answers triggered the top lamp flash, staggered twelve-lamp chase, ignition without numbers, lift-off, cruise and exactly one earned launch. Reduced-motion and leaving a preview were checked. All six Cosmo encounters retained relative scene positioning and centred creatures. Simulated touch hold/release/cancel, tap, double-tap and desktop purr still passed. No runtime exceptions in passing runs. Physical Safari/iPad testing remains required.

## Apple build preparation
The pinned dependencies installed successfully with npm ci from the local integrity-checked cache. Three native tests verify consistent Bundle IDs, build numbering, opaque 1024px icon, offline asset configuration and actual Capacitor CocoaPods Xcode-template patching. The template test checks universal iPhone/iPad settings, Info.plist, icon and privacy resource inclusion, plus idempotent patching. Total domain/native tests: 35. The native asset staging step bundles all local runtime files in dist. A signed archive cannot be tested on this Windows host; Codemagic must perform the macOS build.
