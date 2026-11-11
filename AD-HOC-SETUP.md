# Put Multiploids on a registered family iPad without TestFlight

The new workflow is Multiploids Family iPad — Ad Hoc. The existing Multiploids iOS TestFlight workflow stays available for adult testers. Bundle ID: com.multiploids.tables. The Ad Hoc workflow creates a signed IPA artifact and does not publish it to App Store Connect or TestFlight.

## 1. Get the iPad UDID on Windows

1. Install/open Apple's Apple Devices application on your Windows computer.
2. Connect the iPad with a USB cable, unlock it, and tap Trust on the iPad if asked.
3. Select the iPad in Apple Devices. Click the device information/serial-number text beneath its name to cycle through identifiers until UDID appears. Copy the UDID.
4. If you use iTunes instead, select the iPad → Summary and click Serial Number to reveal UDID, then copy it.

If the label does not cycle in your version of Apple Devices, send a screenshot of that screen so the correct next step can be identified. The serial number and UDID are different identifiers. You do not need to paste the UDID into GitHub or this chat.

Codemagic's automatic registration-link option is available for teams under Team settings → iOS test devices. A personal Codemagic account needs manual Apple device registration; you do not need to create a paid team just for this route.

## 2. Register the iPad with Apple

1. Open https://developer.apple.com/account/resources/devices/list.
2. Click +. Choose iOS/iPadOS as offered, name it Family iPad, paste the UDID and register it.

## 3. Create a DIFFERENT provisioning profile for direct installation

1. Open https://developer.apple.com/account/resources/profiles/list → +.
2. Under Distribution choose Ad Hoc. Do not choose App Store Connect for this profile.
3. Select com.multiploids.tables, your existing valid distribution certificate, and the newly registered Family iPad.
4. Name it Multiploids Family Ad Hoc, generate it and download the .mobileprovision file.
5. In Codemagic → Code signing identities → iOS provisioning profiles, fetch or upload this profile. Use reference multiploids_family_adhoc if uploading manually. Confirm type ad_hoc, Bundle ID com.multiploids.tables and a green certificate indicator.

Keep the existing App Store profile too. The workflow selects the appropriate type, so the two profiles can coexist.

## 4. Upload the updated workflow and build

1. Upload the supplied codemagic.yaml to the top level of your Multiploids GitHub repository, replacing the old file, and commit. Do not replace it with a Spelloids workflow.
2. In Codemagic refresh the main branch configuration and start Multiploids Family iPad — Ad Hoc.
3. The same app, character customisation, offline voices and saved-progress code are built. Signing uses only the registered devices in the Ad Hoc profile.

## 5. Install the Ad Hoc build on that iPad

After the build succeeds, open its Codemagic build page → Artifacts. Use the installation/QR control beside the .ipa artifact and open its installation link in Safari on the registered iPad. Follow the installation prompts. A bare IPA downloaded to Files is not an installer; use the installation link or QR flow.

If Codemagic only displays a Download action and no installation/QR option, send a screenshot of the Artifacts area before trying another service. Do not use the App Store-signed IPA from the TestFlight workflow for direct installation.

If iPadOS asks for Developer Mode, enable it under Settings → Privacy & Security → Developer Mode and follow the restart confirmation. Device restrictions can affect whether this setting or installation is available.

The iPad can keep its existing child Apple account. Ad Hoc installation does not need a TestFlight account or TestFlight beta review. Initial device/profile registration and a signed Mac build are still required. Updates need another Ad Hoc build, and provisioning profiles are time-limited; future builds need a renewed valid profile after expiry. The installed app's saved progress is separate from Safari's saved data.

References:
- Apple registered-device distribution: https://developer.apple.com/documentation/xcode/distributing-your-app-to-registered-devices
- Apple Ad Hoc profiles: https://developer.apple.com/help/account/provisioning-profiles/create-an-ad-hoc-provisioning-profile/
- Codemagic device registration: https://docs.codemagic.io/yaml-testing/ios-provisioning/
- Codemagic artifact installation example: https://labs.codemagic.io/your-first-flutter-app-to-appstore/

Prepared and checked locally. No device has been registered, no profile downloaded, and no signed Ad Hoc build created by this chat.
