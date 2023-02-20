module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  settings: {
    react: {
      version: "17",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src/"],
      },
      typescript: {},
    },
  },
  rules: {
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "no-undef": "off",
    "no-param-reassign": "off",
    curly: ["error", "all"],
    "no-use-before-define": "off",
    "arrow-body-style": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { ignoreRestSiblings: true },
    ],
    "no-shadow": "off",
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "import/no-extraneous-dependencies": "off",
    "react/require-default-props": "off",
    "consistent-return": "off",
    "react/function-component-definition": "off",
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
  },
  overrides: [
    {
      files: ["*.test.{ts,tsx}"],
      rules: {
        "no-console": ["error", { allow: ["warn", "error"] }],
      },
    },
  ],
};
