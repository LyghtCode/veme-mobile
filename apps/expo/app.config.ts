import type { ConfigContext, ExpoConfig } from "expo/config";
import buildPropertiesPlugin from "expo-build-properties";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "veme",
  slug: "veme",
  scheme: "veme",
  version: "0.1.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/icon.png",
    resizeMode: "contain",
    backgroundColor: "#1F104A",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    bundleIdentifier: "com.veme.mobile",
    supportsTablet: true,
  },
  android: {
    package: "com.veme.mobile",
    adaptiveIcon: {
      foregroundImage: "./assets/icon.png",
      backgroundColor: "#1F104A",
    },
  },
  extra: {
    eas: {
      projectId: "d862a267-8b8c-4e33-a135-f608d4f297db",
    },
  },
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true,
  },
  plugins: [
    "expo-router",
    [
      "react-native-imglysdk",
      {
        android: {
          version: "10.9.0",
          kspVersion: "1.8.0-1.0.9",
          modules: [
            "ui:core",
            "ui:transform",
            "ui:filter",
            "assets:filter-basic",
          ],
          buildToolsVersion: "34.0.0",
          minSdkVersion: "21",
          compileSdkVersion: "34",
          targetSdkVersion: "34",
          kotlinGradlePluginVersion: "1.8.0",
        },
      },
    ],
    // [
    //   "expo-build-properties",
    //   {
    //     android: {
    //       kotlinVersion: "1.9.22",
    //     },
    //   },
    // ],
    // "./plugins/custom-ksp",
  ],
});
