# Calcolatore Inotropi

Welcome to the 'Calcolatore Inotropi' repo! This straightforward tool is designed to simplify inotrope dosing conversions. This app provides a simple solution for quickly converting the necessary measurements to ensure accurate dosing. It's designed to be user-friendly, making it easier for anyone who needs to perform these calculations without the complexity of more advanced tools. The focus is on functionality and ease of use, aiming to make this aspect of medical or pharmaceutical work a bit more manageable.

## Prerequisites

Before you get started, ensure you have the following software installed on your system:

- **Node.js** (version 16.17.0 or above)
- **npm** (version 8.19.2 or above)
- **Ionic** (version 6.20.1 or above)
- **Cordova** (version 11.0.0 or above)

You can check your current versions by running the following commands in your terminal:

```bash
node -v
npm -v
ionic -v
cordova -v
```
If any of these are not installed or are below the required version, please update them or follow the installation guides on their respective websites.

## Getting Started

To run **Calcolatore Inotropi** locally, follow these steps:

#### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/GiuseppeSoriano/CalcolatoreInotropi
cd [local repository]
```

#### Install Dependencies
Next, install the project dependencies by running:

```bash
npm install
```

#### Add Platforms

You need to add the platforms you want to run your app on. For example, to add Android and iOS platforms, run:

```bash
ionic cordova platform add android
ionic cordova platform add ios
```
(Note: For iOS, you need to have Xcode installed on your Mac.)

#### Run the App
Finally, you can run the app on your device or an emulator by running:

```bash
ionic cordova run android
```
or

```bash
ionic cordova run ios
```

## License

This project is licensed under custom terms. You are allowed to clone and modify the code for local testing and evaluation purposes only. Redistribution, commercial use, or creation of derivative works for publication or distribution are not permitted without explicit written consent. For the full license terms, see the [LICENSE](LICENSE.md) file.
