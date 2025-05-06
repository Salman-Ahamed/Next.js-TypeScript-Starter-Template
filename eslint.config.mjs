import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
      baseDirectory: __dirname,
      recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
      ...compat.extends("next/core-web-vitals", "plugin:@typescript-eslint/recommended"),
      {
            rules: {
                  "react/function-component-definition": [
                        "error",
                        {
                              namedComponents: "arrow-function",
                              unnamedComponents: "arrow-function",
                        },
                  ],

                  "@typescript-eslint/no-unused-vars": [
                        "warn",
                        {
                              argsIgnorePattern: "^_",
                              varsIgnorePattern: "^_",
                              caughtErrorsIgnorePattern: "^_",
                        },
                  ],
                  "no-restricted-syntax": ["error", "FunctionDeclaration", "FunctionExpression"],
            },
      },
];

export default eslintConfig;
