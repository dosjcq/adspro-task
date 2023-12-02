import {Configuration} from 'webpack';

import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildMode, IBuildEnv, IBuildPaths } from "./config/build/types/config";
import path from "path";



export default (env: IBuildEnv) => {


  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    dist: path.resolve(__dirname, 'dist'),
    html:  path.resolve(__dirname, 'public', 'index.html')
  }
  
  const mode: BuildMode = env.mode || 'development'
  const port = env.port || 3000

  const isDev = mode === 'development'
  
  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port
  })

  return config
}