// plugins/custom-ksp.js
const { withProjectBuildGradle } = require("@expo/config-plugins");

const withCustomKsp = (config) => {
  return withProjectBuildGradle(config, (config) => {
    const buildGradle = config.modResults.contents;

    // Replace the existing KSP version with a compatible one
    config.modResults.contents = buildGradle.replace(
      /id "com.google.devtools.ksp".*version "([\d.-]+)"/,
      'id "com.google.devtools.ksp" version "1.9.0-1.0.13"',
    );

    return config;
  });
};

module.exports = withCustomKsp;
