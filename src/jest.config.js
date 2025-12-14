module.exports = {
  moduleNameMapper: {
    "^react$": require.resolve("react"),
    "^react-dom$": require.resolve("react-dom"),
    "\\.svg$": "<rootDir>/__mocks__/svg.tsx",
  },
  testEnvironment: "jsdom",
};
