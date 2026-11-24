# Multiploids v1.1.1 — Get the crew home

A playable space-themed multiplication prototype for ages 5–11. Dark starry skies, numbered rockets, a customisable Multiploid and a little crew who need help getting home. Division is not included.

## Try it

Computer: http://localhost:4190/

The preview started by Codex also listens on the local Wi-Fi network. The iPad must use the same Wi-Fi and the computer must stay on. The last preview address was http://192.168.4.26:4190/; this can change if the computer changes networks.

Extract this ZIP and double-click Open Multiploids.cmd on Windows. Node.js 22+ is required. Or run npm start here and open the local address. Keep the whole folder together; do not double-click index.html. For another device, run the server with HOST set to 0.0.0.0 and allow Node on the private network if Windows asks.

This updates the Multiploids prototype only. Spelloids and its upload package are unchanged. It retains existing Multiploids explorers, customisation, records, coins and learned facts in the same browser. Rocket system checks are new, so earlier mixed practice is not silently treated as a completed rocket. Existing browser data keeps its original version/storage key for compatibility.

If the old colours appear, refresh the page, wait a few seconds for the updated offline files, then refresh again. Keep site data: clearing it removes progress.

## One table, one rocket

Choose one or several tables from 1–12. Each chosen table has its own numbered rocket. Select a rocket before practising; every ship activity stays on that rocket's table. For example, Rocket 7 uses 7 × 1 through 7 × 12, not a mix of selected tables.

Each rocket needs five systems:

- Rocket Fuel: all twelve facts in a shuffled order. Each correct independent answer fills its own numbered fuel cell.
- Cargo Crew: all twelve facts using equal groups of moonberries. Load the crates, then find the total.
- Launch Bridge: all twelve missing-multiplier facts, still multiplication notation.
- Array Shields: four challenges, with multipliers 2, 3, 4 and 6. Drag or tap star rows into the shield, then find the total. Both row construction and the answer are checked.
- Orbit Sketch: three equal-group charts, using multipliers 2, 3 and 4. Place the rocket-table number of stars into each orbit, then find the total. Stars can be stamped by finger, dragged along a path, or added/removed with buttons. There is a pen for decorative drawing and a rubber for counted stars. Freehand art is not automatically interpreted or graded.

Practice has one retry. A second error moves on, leaving the missed fact for a later visit. Showing help does not earn an independent ship check. Correct checks persist, and unfinished modules offer only residual facts. Once complete, the primary action returns to the ship. Replays stay locked until a failed or successful launch. Failed-launch recap contains only the missed fact and facts not yet reached, and correctly revisited facts leave recap across all modules. A successful launch enables optional full recap.

## Prepare first, then pass the final launch check

All five completed systems enable the final launch check. The rocket cannot launch merely because its module progress is full.

The final check uses all twelve facts for that rocket only, in a freshly shuffled order. The child must answer all twelve correctly in a row. A mistake ends that attempt and offers a fresh shuffled attempt at zero; none of the completed systems are lost. There are no hints, skips or countdown in this check. On success the lift-off animation plays, the flight is recorded and the crew gets home.

A real rocket launch is recorded once per local calendar day, per rocket. The next day the child may recap any modules and pass a fresh final check to launch again. Prepared systems stay ready; recaps are optional. Today's lift-off can be replayed without extra rewards. A day is the device's local date, not a 24-hour timer.

Grown-ups has a labelled launch preview for testing the animation. Previewing does not complete systems, grant a launch or unlock another Starbase game.

## Two clear reward paths

Practice attempts earn character badges: start to choose a name, shape and one of two voices: Heart 2 or Little Monster; 5 different fact/activity combinations unlock body colour; 10 radar/satellite/energy antennae; 20 a helmet/flight suit; 30 space boots/scanners; 40 rainbow. Repeated retries/replays of the same combination do not farm new creation credit. Preview features before confirming them for this creation mission. Owned accessories/eye colours stay changeable.

Correct, unassisted checks prepare rocket systems. Purple character progress and teal rocket readiness are shown separately. Mixed games do not fill a rocket's systems. A rocket being 100% prepared means it is ready for the final check, not that it has already flown.

The grown-up-only New creation mission action is separate from daily flights: it starts a new character and fresh ship checks while keeping learned facts, owned clothes, coins, records and flight history. The next-day daily recap does not reset the character or its prepared systems.

## Mixed-table challenges

Cosmo Hop replaces Skyhop. Questions mix the selected tables; every correct answer reaches a different space stop, including planets, a friendly alien, a sun, a moon, a pretend black hole and a comet. One mistake ends the streak with a spinning fall off-screen. Current streaks are displayed on the Cosmo Hop button and resume at the next unanswered fact when revisiting. Records stay tied to the exact table selection. Every five in a row earns five bonus sparks on every run.

Fleet Flight Check is a separate Test yourself activity. It asks every fact from all selected tables once each, with results at the end. It has no hints, retries or timer, and offers a skip. It earns participation/learning progress but does not prepare an individual rocket.

## My progress: read the table aloud

Each selected table has a Read this table button. It reads every line from ×1 to ×12, including the answer, and highlights the current line. Press again to stop. Changing page/profile or muting also stops reading. Turn sound on first. Per-table songs are a future addition; no song recordings are fabricated or implied in this prototype.

## The Starbase

Two games are free from the start: Meteor Dash and Constellation Pairs. Each different numbered rocket brought home unlocks one additional game, in order. Repeated daily flights of the same rocket do not farm game unlocks. The collection includes 12 unlockable games: Beacon Echo, Lost Moonlings, Moon Maze, Solar Switches, Space Jigsaw, Cargo Colours, Moon Landing, Comet Signals, Sleepy Sun, Star Trail, Alien Artist and Planet Lines. They run locally and offer different puzzles, timing, memory, sorting and exploration activities. New-game names are celebrated after launch.

Starbase games do not grant learning badges or prepare ship systems. A prominent result card offers Play again and Return to Starbase. Unlocked games remain earned for that explorer across creation missions.

The new Multiploid crew has three space-specific 3D bodies: Orbit (a broad, simple body), Comet (a one-eyed tapered creature with side fins), and Lunar (a moon-eared creature). Radar dishes, solar panels, energy tips, lunar helmets, flight uniforms and thruster boots distinguish this collection from Spelloids. Existing saved characters remain intact; start a new creation mission from Grown-ups to try new bodies if your current character is already confirmed.

## Offline, voices and saving

All fonts, graphics, 3D models, pitch processing and 154 generated speech clips are included. No paid API, external dictionary, analytics or runtime model download is used. New characters choose between Heart 2 and Little Monster. Heart 2 uses a separate, locally generated af_heart bank with the approved +4 pitch / +2.5 formant treatment; Little Monster uses the bf_emma bank with the same approved treatment. Playback speed is unchanged. The untouched natural voice remains the pre-choice default; existing saved voice choices keep working.

On localhost or HTTPS, wait for the service worker to finish caching the app before disconnecting. Browser offline reload and local audio are tested. Safari does not install a service worker from a plain HTTP local-network address; on that iPad preview keep the computer/server reachable over Wi-Fi. An HTTPS hosted copy can be prepared for independent offline use.

Two explorers keep separate profiles. Different devices/browsers do not sync. Clearing browser data removes that browser's progress.

## Upload elsewhere

Use a separate Multiploids repository/site. Do not replace Spelloids. Upload the extracted root files and vendor/fonts folders first, then the base audio files (77 WAVs plus manifest.json) as a second batch. Finally, open audio in GitHub and upload its heart folder (another 78 files) as a third batch to avoid GitHub's 100-file browser-upload limit. GitHub Pages main / root works with these static files. No hidden .github folder or paid hosting is required.

## Validation and attribution

Run npm test: 24 learning/rocket/launch/reward checks. Run npm run build after editing to regenerate the versioned offline cache and verify local speech coverage. See VALIDATION.json and TESTING.md for browser checks. Physical iPad audio permissions and touch feel still need your play test. No public website deployment or App Store build was performed.

Original family character models/gestures are shared with Spelloids; the space art, mission UI and game code are original Multiploids work. Three.js and Signalsmith notices are under vendor/, font licences under fonts/. Original speech was generated locally with Kokoro 82M bf_emma (Apache 2.0 model). The app plays local clips and does not run/download a speech model.

The final launch check uses a twelve-colour vertical signal tower. Lamps light from the bottom up; shaking and exhaust build with correct answers. All twelve lights stay visible briefly before lift-off. Home-safe rocket cards turn green with a tick. Every module has a Back to Mission Control action.

Cosmo Hop encouragement varies between Keep going, Great, Super, Awesome, Lovely work, You got it, Fantastic and Brilliant. Its shuffled phrase queue avoids adjacent repeats and remains saved with the run. Milestone and record celebrations still take priority. All encouragement is included in both offline speech banks.

The blue ring has been removed from the basic Orbit body. A tilted, floating planet ring is recorded in NEXT-UPDATE.md as a later optional accessory.

## v0.4 mission layout and launch

The fleet starts compact with three rockets, including the active ship. Show all / Show fewer expands or collapses large selections. Each card has five separate module strips, with partial progress inside each strip. Every practice screen has a large bottom-left Mission Control button. Rocket Fuel consistently describes adding fuel cells.

The final launch check flashes its top lamp, then chases all twelve lights before ignition. There is no numeric countdown. Engine shake, rolling exhaust, a longer accelerating lift-off and a short flight-home scene make launch more visible. Reduced-motion settings remove the flashing and shaking.

A class-name collision between the Cosmo planet encounter and its planet artwork caused the whole scene to become absolutely positioned and move right. Artwork now uses its own class, and companion slots use stable centred anchors. All six encounters were checked through successive answers. The iPad long-press/purr fix is included. Saved explorer progress is preserved.

## iPhone and iPad build

The repository includes a pinned Capacitor 8.6.0 setup for com.multiploids.tables. Read CODEMAGIC-SETUP.md to create the Apple record/profile and run the Codemagic workflow. The installed app includes every game, font and both voice banks locally. Run npm ci, npm test and npm run ios:check for configuration checks. The signed Apple build is created on Codemagic’s macOS machine with npm run ios:prepare. The installed app has separate saved progress from Safari.

## v0.4.2 — Bright rainbow and weekly suits

Rainbow skin uses seven saturated colour bands. Badge 6 also gives a fitted rainbow flight suit immediately, including for existing rainbow owners whose body colour is locked. The workshop has a prominent wear button. Existing progress, rocket launches, colours and saved character choices are preserved.

A new dated suit design arrives every local Monday. Practising 20 distinct reward-eligible questions that week opens its claim button; retries and completed-question extra practice do not farm this reward. The weekly counter starts with this update. Earned and claimed outfits remain in the collection across calendar weeks and creation missions, and can be worn again. Designs alternate sparkle, aurora, galaxy and rainbow textiles, with a deterministic new colour combination each week. This works offline using the device clock; changing a device clock is not prevented by this prototype.

Suits fit each alien's actual torso surface. Their full colour pattern spans the garment rather than being cut down to a blue strip. New suit textures are generated locally and do not download artwork or change speech.

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

- Grown-ups → App Review → 773011 opens a separate in-memory demonstration with all creation badges. Fresh demo and Exit App Review are always visible. Reloading also returns to the saved learner. Demo changes never write learner storage.
- Launch and intro development previews removed from Grown-ups. Normal earned flight replays remain available.
- Offline privacy information accessible from the footer; full online policy link in Grown-ups.
- Retains weekly suits, vivid rainbow, coloured module haze and the three-eyed logo.
- Build the Multiploids iOS TestFlight workflow in Codemagic. Signing and Apple upload happen there, not on this Windows computer.

## Release 1.0.1

Modules open at their activity header instead of retaining Mission Control scroll. Resuming from the workshop and starting a new round also align the header; normal answering, cargo taps and drawing do not reset the viewport. Verified all eight learning modes at 1024×768, 1180×820, 820×1180 and 393×852.

## Release 1.1.0 — Growing collections and phone layouts

- Try on combinations before Keep this look; Cancel try-on restores the saved appearance. Take off removes any owned suit or accessory, including rainbow and weekly suits.
- Earned body colours, antennae and outfits remain changeable across missions. Name, shape and voice remain the creation-mission identity.
- 40 new accessories (hats, suits, boots, scanners, gloves and space jewels) and 11 additional body colours. 51 permanent collection milestones begin at 60 questions and continue every 20 through 1,060. A fact/activity earns collection credit once each day; resetting a mission cannot farm that day’s credit. Weekly suits continue after the milestone collection.
- Smaller rocket cards with five module-coloured progress bars arranged like the preparation cards. Removed the missed-facts sentence.
- Compact phone activities, complete keypad and check button, uncropped interactive diagrams, optional drawing star buttons and safe-area padding.
- Existing learner data, rockets, records, clothing and the 773011 review route retained.

## Release 1.1.1

Approved shorter 144px rocket cards with larger artwork and narrow module-coloured progress bars. Removed the per-card systems-ready counter and selected/active-rocket explanatory line.
