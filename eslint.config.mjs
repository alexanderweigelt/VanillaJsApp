import globals from "globals";
import eslint from "@eslint/js";
import tsEslint from "typescript-eslint";
import jestPlugin from "eslint-plugin-jest";
import prettierConfig from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default tsEslint.config(
  {
    ignores: [
      "*/**/dist",
      "node_modules",
      "*/**/.*",
      "*/**/*.config.*",
      "*.config.*",
    ],
  },
  eslint.configs.recommended,
  tsEslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: globals.browser,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-unsafe-return": "off",
    },
  },
  {
    files: ["**/*.js"],
    extends: [tsEslint.configs.disableTypeChecked],
  },
  {
    files: ["**/*.test.*"],
    plugins: {
      jest: jestPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    extends: [jestPlugin.configs["flat/recommended"]],
  },
  prettierConfig,
);
