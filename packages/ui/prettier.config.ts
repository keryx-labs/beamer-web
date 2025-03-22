import { fileURLToPath } from "url";
import { type Config } from "prettier";

import prettierConfig from "@beamer/prettier-config";

const tailwindStylesheet = fileURLToPath(
  new URL("./src/styles.css", import.meta.url),
);

export default {
  ...prettierConfig,
  tailwindStylesheet,
} satisfies Config;
