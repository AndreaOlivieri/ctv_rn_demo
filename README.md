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

# 3 - Create the homepage
- 3.1 move the ```App.tsx``` in the ```src``` directory
- 3.1 create the folder ```src``` and the ```Homepage.tsx```
- 3.2 clear the ```App.tsx``` and link the ```Homepage.tsx```

# 4 - Add Sections placeholder and develop Menu component
- 4.1 Create the ```Sections.tsx``` and ```Menu.tsx``` components
- 4.2 Introduce to horizontalScale and verticalScale utils to solve pixel ratio problem
- 4.3 create the MenuItem.tsx component and add the code for rendering the menu

# 5 - Develop the Sections component
- 5.1 Add the MovieProvider to fetch data for the movie sections