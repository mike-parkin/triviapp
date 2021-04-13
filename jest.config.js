module.exports = {
    preset: 'jest-expo',
    setupFiles: [
        "./node_modules/react-native-gesture-handler/jestSetup.js"
      ],
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
    transformIgnorePatterns: [
        "node_modules/(?!((jest-)?react-native|react-navigation|@react-navigation/.*|react-native-picker-select|\@react-native-picker/.*|@expo/.*))"
      ]
  };