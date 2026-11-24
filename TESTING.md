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

## v0.4.2
39 automated domain/native tests passed. New checks cover local Monday rollover, distinct-question weekly credit, duplicate claim protection, saved outfits across new missions, and existing rainbow-owner upgrades without rocket resets. Browser checks claim and equip both suits, confirm the actual 3D engine on Orbit, Comet and Lunar, and check overflow at 1024/820/390px. Both rainbow body and fitted suit were visually inspected. A fully offline reload passed with all 189 cached requests; actual Heart 2 and Little Monster speech playback passed at unchanged playback speed. Native settings validate com.multiploids.tables version 0.4.2; all 189 staged native assets match their sources. Physical iPad and macOS signing still require the user’s Codemagic build and device test.

## v0.4.3 — A simpler Mission Control and a three-eyed welcome

Removed the two permanent creation-badge / rocket-systems summary boxes from Mission Control. Per-rocket five-strip progress, module checks and launch readiness remain visible in their existing places.

New creation badges pause the current question and open a celebration from the child's actual Multiploid. Its speech bubble names the unlocked feature. The approved offline voice gives a positive cheer; the full explanatory sentence is on screen. Choose Update my Multiploid to visit the workshop, or Keep playing to continue. Correct-answer advancement, a first-mistake retry, mixed checks and the final launch check retain their current state. Pending notices survive reload; existing earned badges do not replay on upgrade. Badges and rocket completion rules are unchanged.

A short, skippable welcome shows Multiploids and a dancing, three-eyed mint character. It automatically enters Mission Control after five seconds and can be replayed under Grown-ups. Reduced-motion settings use a still character and remove the entrance animation. The introduction does not change the child's chosen character.

The new mint three-eyed logo uses the rounded Learnoids family style, based on https://learnoids.co.uk/assets/mark.svg, with a clear multiplication symbol. It replaces the previous in-game header mark and browser icon, appears in the welcome, and has a matching opaque 1024px iPad app icon.

Verified: 43 automated learning/reward/native tests; actual browser question-to-badge/customise/resume and retry behaviour; pending-notice reload; intro skip/automatic finish/reduced motion; 320/390/820/1024px layouts; fully offline reload with 192 cached requests and actual Heart 2 / Little Monster speech at unchanged playback speed. Visual screenshots were reviewed. No physical iPad or macOS signed archive was produced locally; use the existing Codemagic workflow and install over the existing app.

## v0.4.4 — Title, logo, then ×

Replaces the v0.4.3 introduction. The Multiploids title appears first, followed by the three-eyed family logo with a soft two-note bloop. The logo's multiplication badge pops in last with a short finishing chime. There is no live 3D character or dancing creature in this intro. The in-game header, favicon and native icon retain the new three-eyed logo.

Skip and Let's play enter Mission Control, or the intro finishes automatically after about four seconds. Replay with sound explicitly enables and unlocks audio with a tap, then restarts the sequence. This provides a fallback when Safari blocks automatic startup audio. Muted startup remains silent, delayed effects are cancelled when leaving, and reduced motion shows the completed logo without entrance animations. Sounds are generated locally; no audio bank or paid service is required.

This package also includes the previous update's Mission Control simplification, badge speech bubbles, paused customisation flow and matching iPad app icon. Use this package instead of the v0.4.3 ZIP; it can be uploaded over v0.4.2 or v0.4.3.

Verified: all 43 automated learning/reward/native checks pass. Browser checks confirm title/logo/× order, exactly three logo eyes, no intro WebGL character, both procedural sound cues, saved mute, replay with sound, Skip cancelling queued effects, reduced motion, automatic finish and 320/390/820/1024px widths without overflow or runtime errors. Physical iPad sound/autoplay and macOS signing still require the parent's device/Codemagic build.

## v0.4.5 — Module colours and Apple SDK build selection

Applied the approved haze: mint Cargo Crew, lilac Launch Bridge, blue Array Shields and pink Orbit Sketch. Rocket Fuel keeps its current warm treatment. Completed modules retain the existing green completed styling.

Both Codemagic workflows explicitly select the documented stable Xcode 27.2 image instead of the latest alias. A dependency-free first step runs xcodebuild -version and xcrun --sdk iphoneos --show-sdk-version on the build Mac, logs both versions and stops early if either Xcode or the iOS SDK is below 27. The TestFlight publishing settings, signing integration, Bundle ID and device deployment target are unchanged.

Apple's ITMS-90725 message is advance notice of its April 2027 requirement. Existing binaries cannot acquire a different SDK after building: upload this updated configuration and make a NEW Codemagic TestFlight build. Xcode 27.2 is documented as available for the Mac mini M2. No claim is made that a signed Xcode 27.2 archive has been produced or accepted here; the next Codemagic build must verify that.

Checked: 46 automated tests, including accepting Xcode/iOS SDK 27.2 and newer, rejecting 26.5 or a mismatched older SDK, and clear errors for unreadable versions. Browser checks confirm the actual stylesheet matches the approved preview, completed cards stay green and 320/390/820/1180px layouts have no horizontal overflow or runtime exceptions. All 192 bundled native runtime assets match source.

Sources checked 23 November 2026:
Apple SDK requirement: https://developer.apple.com/news/?id=k1mtkt1k
Codemagic Xcode 27.2 release and selection: https://codemagic.io/whats-new/
Codemagic Xcode 27.2 / M2 machine specification: https://docs.codemagic.io/specs-macos/xcode-27-2/

## Release 1.0.0

49 automated tests passed. Browser checks at iPad 1024×768 and iPhone 393×852 verified the grown-up gate, invalid/valid reviewer codes, shape/voice/rainbow/antennae/outfit selection, unchanged learner storage throughout demo, exit/reset/reload isolation, privacy navigation and no horizontal overflow or runtime exceptions. These are browser checks; a signed IPA and physical-device release test remain for Codemagic/TestFlight.

## Release 1.0.1

52 automated tests passed. 32 browser entry cases passed across eight modes and four tablet/phone sizes. Cargo and number-pad interaction preserved scroll position. Physical iPad testing and a signed Apple build remain for TestFlight.

## Release 1.1.0

59 automated tests passed. 32 activity layout checks across 375×623, 393×774, 430×820 and 1024×768; three dense 12-table construction checks at 375×623. Full keypad and check button remained in the available phone viewport. Browser tests verified try-on/cancel/confirm, removing and re-equipping rainbow, all nine category tabs, all six accessory types rendered together, compact fleet width and progress fill/colours, and isolated App Review changes preserving learner storage. No physical-device or signed-IPA test performed on Windows.

## Release 1.1.1

All twelve cards checked at 320, 393, 820 and 1180px, including title and progress-bar bounds, no horizontal page overflow, 144px card height and removed summary/counter wording. Native configuration and bundled build checked. The 59-test automated suite last passed on 1.1.0; this release changes card presentation and wording only.
