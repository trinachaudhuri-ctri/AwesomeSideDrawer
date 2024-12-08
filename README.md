React Native Drawer and Tab Navigation Setup (with Stack Navigation)
This project implements a React Native application with a complex navigation structure using react-navigation, react-native-gesture-handler, and react-native-reanimated. The navigation structure consists of:

Drawer Navigation as the parent component
Tab Navigation as child components within the drawer
Stack Navigation for each tab, with multiple screens (e.g., Screen1, Screen2)
Use of TypeScript for type safety
Integration of react-native-reanimated for smoother UI transitions

Installation
Prerequisites
Make sure you have the following installed:

Node.js (version 16 or later)
npm or yarn package manager
React Native CLI (if you plan to use the native development tools)
Android Studio or Xcode for emulation (optional)
Steps to Setup
Clone the repository:
bash
Copy code
git clone https://github.com/trinachaudhuri-ctri/AwesomeSideDrawer.git
cd AwesomeSideDrawer

Install native dependencies:
You need to install additional native dependencies like react-native-gesture-handler and react-native-reanimated.

bash
Copy code
npm install react-native-gesture-handler react-native-reanimated
Install CocoaPods (iOS only):
For iOS development, run the following command to install CocoaPods dependencies:

bash
Copy code
cd ios && pod install && cd ..
Start the app:
For Android:

bash
Copy code
npx react-native run-android
For iOS:

bash
Copy code
npx react-native run-ios

<video width="320" height="240" controls>
  <source src="assets/AwesomeSideDrawer.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
