# Multiploids: GitHub → Codemagic → Apple TestFlight

Use the Multiploids repository. This build is separate from Spelloids. You do not need a Mac at home; Codemagic supplies the Mac for the Apple build. An active Apple Developer Program membership is required.

The prepared values are:

| Field | Value |
| --- | --- |
| App name | Multiploids |
| Apple App ID description | Multiploids Times Tables |
| Bundle ID (Explicit) | com.multiploids.tables |
| App ID Prefix | Keep Apple's existing team value |
| SKU | MULTIPLOIDS-TABLES-001 |
| Platform | iOS (includes iPad) |
| Primary language | English (U.K.) |
| Codemagic integration reference | Codemagic |
| Workflow | Multiploids iOS TestFlight |
| Initial version | 0.4.0 |

## 1. Register the Apple App ID

1. Sign in to https://developer.apple.com/account/.
2. Open Certificates, Identifiers & Profiles → Identifiers → +.
3. Choose App IDs → App, then Continue.
4. Enter Description: Multiploids Times Tables.
5. Choose Explicit and enter com.multiploids.tables.
6. Leave App ID Prefix as Apple sets it. No extra capabilities are needed for this prototype. Leave the remaining defaults, then Continue → Register.

If this exact identifier is already registered to your team, use it rather than creating another one. It must match capacitor.config.json and codemagic.yaml exactly. Do not select the Spelloids identifier.

Apple instructions: https://developer.apple.com/help/account/identifiers/register-an-app-id/

## 2. Create its App Store Connect record

1. Open https://appstoreconnect.apple.com/ → Apps → + → New App.
2. Select iOS. Enter Name: Multiploids, Primary language: English (U.K.), Bundle ID: com.multiploids.tables, SKU: MULTIPLOIDS-TABLES-001. Choose Full Access for your team and Create.
3. If Apple asks you to accept an agreement before creating the app, the Account Holder needs to accept it.

The SKU is an internal reference you choose; it is not a password. The Apple ID shown after creating the record is assigned by Apple. This workflow does not require you to put that numerical Apple ID into the code.

Apple instructions: https://developer.apple.com/help/app-store-connect/create-an-app-record/add-a-new-app/

## 3. Put the supplied code in GitHub

If your Multiploids repository already exists, keep it. Extract multiploids-apple-build-upload.zip and upload these batches to that repository's TOP LEVEL, committing each upload:

1. Open 01-main-files and upload everything INSIDE it, including native, scripts, tests, fonts and vendor. Do not upload the numbered folder itself.
2. Open 02-base-audio and upload its audio folder at the repository top level.
3. Open 03-heart-audio and upload its audio folder at the repository top level. This merges audio/heart with the existing audio folder.

Each batch is below GitHub's 100-file browser limit. Existing files are replaced with this complete, current version. Do not upload the ZIP itself. No node_modules, dist or generated ios folder needs uploading. The Mac build generates those.

After upload, the repository must show codemagic.yaml, capacitor.config.json, package.json, package-lock.json, index.html, build.js, and the native and scripts folders at the top level. No hidden .github folder is needed. GitHub Pages is optional and independent of the Apple build.

## 4. Connect GitHub to Codemagic

1. Sign in to https://codemagic.io/ with the same Codemagic account/team used for Spelloids.
2. Open Applications → Add application. Select GitHub and your Multiploids repository. If it is missing, use Manage Integration to give the Codemagic GitHub app access to that repository.
3. Select Ionic/Capacitor if Codemagic asks for the project type; use codemagic.yaml configuration.
4. Open the app settings, select branch main and click Check for configuration files (or the refresh button). Codemagic should find Multiploids iOS TestFlight.

Do not start the build until its signing profile is ready in the next step.

## 5. Apple integration, certificate and new signing profile

You already connected an Apple integration named Codemagic for Spelloids. Reuse it for this app if it belongs to the same Apple developer team.

1. In Codemagic account/team settings, open Integrations → Developer Portal → Manage keys. Confirm the integration reference is exactly Codemagic. The spelling and capitalisation must match the app_store_connect line in codemagic.yaml. If your reference differs, edit that one YAML value to match.
2. Keep the valid Apple Distribution certificate already used to sign Spelloids. Certificates can be shared between apps on the same Apple team, but each app needs its own matching profile. Reuse a certificate for which Codemagic already holds the private key.
3. In Apple Developer → Certificates, Identifiers & Profiles → Profiles → +, select Distribution → App Store Connect (sometimes labelled App Store), then Continue.
4. Select Multiploids / com.multiploids.tables. Choose the same valid distribution certificate that is available in Codemagic. Name the profile Multiploids App Store → Generate → Download.
5. Back in Codemagic → Code signing identities → iOS provisioning profiles, click Fetch profiles. Select Multiploids App Store and Download selected. Alternatively, upload the downloaded .mobileprovision file there, with reference name multiploids_app_store.
6. Check the available profile shows Bundle ID com.multiploids.tables, type app_store and a green certificate indicator. Once it is listed there, you do not need to upload the same file again.

If you genuinely do not have an Apple integration, create a TEAM API key in App Store Connect → Users and Access → Integrations → App Store Connect API → Team Keys. A key with signing/profile access is needed for signing management; an Admin team key supports that setup. Upload its .p8, Key ID and Issuer ID to the Codemagic integration and use the reference Codemagic. Reuse your existing working key where possible. Never put a .p8, .p12, signing password or mobileprovision file in GitHub or chat.

Signing: https://docs.codemagic.io/yaml-code-signing/signing-ios/
Apple profiles: https://developer.apple.com/help/account/provisioning-profiles/create-an-app-store-provisioning-profile/
API keys: https://developer.apple.com/help/app-store-connect/get-started/app-store-connect-api

## 6. Run the Apple build

1. In Codemagic, open the Multiploids application and click Start new build / Start your first build.
2. Choose branch main and workflow Multiploids iOS TestFlight. Start.
3. The workflow installs locked dependencies, runs the learning/native checks, bundles all assets and voices, generates the Xcode project, applies signing, creates the IPA and uploads it to App Store Connect.
4. When publishing succeeds, open App Store Connect → Multiploids → TestFlight. Wait for Apple to finish processing the build.

The first version is 0.4.0. The script derives an increasing build number from Codemagic's project build counter. If Apple ever says a build number already exists, set the optional IOS_BUILD_NUMBER environment variable in Codemagic to a positive integer higher than the last Apple build; do not put secrets in that variable.

The YAML deliberately contains:

    auth: integration
    submit_to_testflight: false
    submit_to_app_store: false

The IPA STILL UPLOADS to App Store Connect. The false values only mean Codemagic will not automatically submit beta review or public App Store review. For the first beta, complete Apple's test/contact information and submit it in App Store Connect. Nothing is automatically published to the public App Store.

Publishing: https://docs.codemagic.io/yaml-publishing/app-store-connect/

## 7. Install and invite testers

To try it yourself, add an internal testing group and your App Store Connect user in the app's TestFlight section. Install Apple's TestFlight app on the iPad, accept the invitation and install Multiploids. Do not add a child's Apple account as an App Store Connect team member merely to test; use an external group for family testers who are not team users.

For your daughter or other external testers:

1. Complete TestFlight → Test Information, including beta description, feedback email and review contact details. No sign-in is required by this app. Grown-up settings use the arithmetic answer 29.
2. Under External Testing, create a group such as Family testing.
3. Add build 0.4.0, enter What to Test and choose Submit Review. The first external build requires Apple beta review; do not assume a fixed 24-hour approval time.
4. After approval, invite testers by email or enable the group's public link. They install using TestFlight.

Suggested beta description:

Multiploids is an offline multiplication-practice game for children aged 5–10. Choose times tables, create a character, complete five ship-preparation modules and answer twelve shuffled facts to launch a rocket. Cosmo Hop mixes the selected tables. Starbase starts with two games and adds games as different rockets are brought home. No account, purchases, ads or online service is required.

Suggested What to Test:

Please try iPad portrait and landscape layouts, both character voices, hold-to-purr, the five practice modules, compact/expanded rocket cards, the final launch-light sequence, Starbase games and saving progress after closing and reopening the app.

Apple external testing: https://developer.apple.com/help/app-store-connect/test-a-beta-version/invite-external-testers/

## If a build stops

- No configuration found: codemagic.yaml must be at the repository top level on main. Refresh the configuration in Codemagic.
- Integration not found: the integration reference is case-sensitive; copy its exact name from Manage keys into YAML.
- No matching provisioning profile: fetch/upload the new Multiploids profile; the Spelloids profile cannot sign this Bundle ID.
- Profile has no certificate / missing private key: select a distribution certificate whose private key is already stored in Codemagic, then regenerate and fetch the profile for that certificate.
- npm ci fails: upload both package.json and package-lock.json from this package.
- Missing offline voice asset: upload both audio batches. They contain the number and encouragement clips for both voices.
- Duplicate build number: set IOS_BUILD_NUMBER in Codemagic to a higher positive integer for that build.
- Build succeeds but not visible immediately: check Codemagic's publishing log and Apple processing status; finishing the build is separate from Apple's processing and review.

The code has been checked on Windows, including real pinned-template patching and offline asset staging. The signed Xcode archive itself must be built and verified by Codemagic; no Apple build or review approval has been claimed locally. Native progress starts separately from Safari's saved progress.
