- 1 Let’s create a project with react-native-tvos, run below command in terminal:

```​
​npx react-native init ctv_rn_demo --version=npm:react-native-tvos@latest
```

- 2 After running the above command a new react native project is created and then run below commands.

```
npm install

cd ios

pod install
```

- 3 Run the application on iOS TV simulator
  - 3.1 Open XCode and select the project in the ios directory 
    ```
    ios/ctv_rn_demo.xcworkspace
    ```
  - 3.2 On the top bar of XCode Select the TV app as target and also select the TV emulator

