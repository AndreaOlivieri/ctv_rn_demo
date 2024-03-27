# 0 - Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

# 1 - Create a Project
- 1.1 Let’s create a project with react-native-tvos, run below command in terminal:

```​
​npx react-native init ctv_rn_demo --version=npm:react-native-tvos@latest
```

- 1.2 After running the above command a new react native project is created and then run below commands.

```bash
npm install

cd ios

pod install
```

# 2 - Run the application on TV OS or Android simulator
- 2.1 Start the Metro Server in a terminal, run the following command from the root of your React Native project:
  ```bash
    npm start
  ```
- 2.2 Open a new terminal from the root of your React Native project. Run the following command to start your app:
  - for Android:
    ```bash
      npm run android
    ```
  - for iOS:
    ```bash
      npm run ios
    ```

