import{execFileSync}from'node:child_process';import path from'node:path';import{fileURLToPath}from'node:url';

export function validateAppleSDK(xcodeOutput,sdkOutput){
 const xcode=String(xcodeOutput).match(/^Xcode\s+(\d+(?:\.\d+){0,2})\b/m),sdk=String(sdkOutput).trim();
 if(!xcode||!/^\d+(?:\.\d+){0,2}$/.test(sdk))throw Error('Could not read Xcode/iPhoneOS SDK versions. Check the selected Codemagic Xcode image.');
 const result={xcode:xcode[1],sdk};
 if(Number(result.xcode.split('.')[0])<27||Number(sdk.split('.')[0])<27)throw Error(`Apple SDK requirement: use Xcode 27+ with the iOS 27+ SDK. Selected Xcode ${result.xcode}, iPhoneOS SDK ${sdk}. Refresh Codemagic main and select the pinned Xcode 27.2 workflow.`);
 return result;
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 if(process.platform!=='darwin')throw Error('Run the actual Apple SDK check on the Codemagic macOS build machine. The version parser is tested separately on Windows.');
 const xcode=execFileSync('xcodebuild',['-version'],{encoding:'utf8'}),sdk=execFileSync('xcrun',['--sdk','iphoneos','--show-sdk-version'],{encoding:'utf8'});
 console.log(xcode.trim());console.log('iPhoneOS SDK:',sdk.trim());const result=validateAppleSDK(xcode,sdk);console.log(`Apple upload toolchain verified: Xcode ${result.xcode}, iOS SDK ${result.sdk}.`);
}
