module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "plugin:@typescript-eslint/recommended",
    "plugin:nuxt/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "vue/multi-word-component-names": "off",
    semi: "error",
    quotes: ["error", "double"],
    "arrow-body-style": "error",
    "arrow-parens": "error",
    "arrow-spacing": "error",
    "generator-star-spacing": "error",
    "no-duplicate-imports": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "rest-spread-spacing": "error",
    "template-curly-spacing": "error",
    "yield-star-spacing": "error",
  },
};
