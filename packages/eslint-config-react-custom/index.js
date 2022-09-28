module.exports = {
  extends: ["plugin:import/recommended", "plugin:import/typescript"],
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-sort-props": [
      "error",
      {
        ignoreCase: true,
        reservedFirst: true,
        shorthandFirst: true,
        callbacksLast: true,
      },
    ],
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "import/namespace": "off",
    "import/prefer-default-export": "off",
    "import/export": "error",
    "import/no-cycle": "error",
    "import/no-anonymous-default-export": "error",
  },
};
