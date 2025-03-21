import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  resolvePluginsRelativeTo: __dirname,
});

/** @type {Awaited<import('typescript-eslint').Config>} */
export default [
  { files: ["**/*.ts", "**/*.tsx"], plugins: { react: reactPlugin } },
  ...compat.config({
    plugins: ["react", "react-compiler", "react-hooks"],
    rules: {
      ...reactPlugin.configs["jsx-runtime"].rules,
      ...hooksPlugin.configs.recommended.rules,
      "react-compiler/react-compiler": "error",
    },
    globals: {
      React: "writable",
    },
  }),
];
