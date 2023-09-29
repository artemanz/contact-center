import postcssPresetEnv from "postcss-preset-env";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";

export default {
  plugins: [postcssPresetEnv(), autoprefixer(), tailwindcss()],
};
