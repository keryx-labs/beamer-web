import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  resolvePluginsRelativeTo: __dirname,
});

/** @type {Awaited<import('typescript-eslint').Config>} */
export default [
  { files: ["**/*.ts", "**/*.tsx"] },
  ...compat.extends(
    "plugin:@next/next/recommended",
    "plugin:@next/next/core-web-vitals",
  ),
  {
    rules: {
      // TypeError: context.getAncestors is not a function
      "@next/next/no-duplicate-head": "off",
    },
  },
];
