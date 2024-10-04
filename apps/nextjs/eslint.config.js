import baseConfig, { restrictEnvAccess } from "@veme/eslint-config/base";
import nextjsConfig from "@veme/eslint-config/nextjs";
import reactConfig from "@veme/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
