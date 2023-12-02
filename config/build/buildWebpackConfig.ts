import { Configuration } from "webpack";
import { IBuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: IBuildOptions): Configuration {
  return {
    mode: options.mode,
    entry: options.paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: options.paths.dist,
      clean: true
    },
    plugins: buildPlugins(options.paths),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(),
    devtool: options.isDev ? 'inline-source-map': undefined,
    devServer: options.isDev? buildDevServer(options) : undefined
  };
}