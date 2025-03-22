import baseConfig from "@beamer/eslint-config/base";
import nextConfig from "@beamer/eslint-config/next";
import reactConfig from "@beamer/eslint-config/react";

export default [...baseConfig, ...reactConfig, ...nextConfig];
