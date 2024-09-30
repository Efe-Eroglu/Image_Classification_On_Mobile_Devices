const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig.getDefaultConfig();

  return {
    transformer: {
      assetPlugins: ['expo-asset/tools/hashAssetFiles'],
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== "db"),
      sourceExts: [...sourceExts, "cjs"],
      blacklistRE: /node_modules\/.*\/node_modules\/react-native-gesture-handler\/.*/,
    },
  };
})();
