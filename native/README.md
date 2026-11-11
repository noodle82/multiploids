# Multiploids iPhone and iPad build

Bundle ID: com.multiploids.tables
Codemagic integration reference: Codemagic

The pinned Capacitor template is created on Codemagic's Mac using CocoaPods. The complete app and both offline voice banks are bundled from dist. No preview website or API key is embedded. Native progress is saved separately from Safari progress.

AppIcon.png is an opaque 1024px icon. PrivacyInfo.xcprivacy declares no tracking or data collection for this offline prototype. Capacitor's own privacy manifests are bundled by its pods. No camera, microphone, notifications or account capabilities are requested.

See CODEMAGIC-SETUP.md for the signing and upload steps. Keep .p8, .p12, provisioning profiles and passwords in Codemagic/Apple, never GitHub.
