import gulp from "gulp";
import newer from "gulp-newer";
import webp from "gulp-webp";
import imagemin from "gulp-imagemin";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";

import { resolve } from "path";
const { src, dest, watch, task, series } = gulp;

const input = {
  fonts: resolve("assets/common/fonts"),
  commonImages: resolve("assets/common/images"),
  commonStatic: resolve("assets/common/images/static"),
  commonSvg: resolve("assets/common/svg"),
  images: resolve("assets/pages/**/images"),
  static: resolve("assets/pages/**/images/static"),
  svg: resolve("assets/pages/**/svg"),
  pages: resolve("assets/pages"),
};
const output = {
  fonts: resolve("src/assets/fonts"),
  commonImages: resolve("src/assets/images"),
  commonStatic: resolve("src/assets/images/static"),
  commonSvg: resolve("src/assets/svg"),
  images: resolve("src/pages"),
  static: resolve("src/pages"),
  svg: resolve("src/pages"),
};

/* IMAGES */
function commonImages() {
  return src([resolve(input.commonImages, "**/*")], {
    ignore: resolve(input.commonStatic, "**/*"),
  })
    .pipe(newer(output.commonImages))
    .pipe(webp())
    .pipe(dest(output.commonImages));
}
function images() {
  return src([resolve(input.images, "**/*")], {
    ignore: resolve(input.static, "**/*"),
  })
    .pipe(newer(output.images))
    .pipe(webp())
    .pipe(dest(output.images));
}

function commonStaticImages() {
  return src(resolve(input.static, "**/*"))
    .pipe(
      imagemin({
        progressive: true,
        interlaced: true,
        optimizationLevel: 3,
      })
    )
    .pipe(dest(output.static));
}

function commonSvg() {
  return src(resolve(input.commonSvg, "**/*")).pipe(dest(output.commonSvg));
}

function fonts() {
  return src(resolve(input.fonts, "**/*.ttf"))
    .pipe(fonter({ formats: ["woff"] }))
    .pipe(dest(output.fonts))
    .pipe(src(resolve(input.fonts, "**/*.ttf")))
    .pipe(ttf2woff2())
    .pipe(dest(output.fonts));
}

function watcher() {
  watch(input.fonts, fonts);
  watch(input.commonImages, commonImages);
  watch(input.commonSvg, commonSvg);
  watch(input.pages, images);
}

task(
  "default",
  series(fonts, commonImages, commonStaticImages, commonSvg, images, watcher)
);
task(
  "build",
  series(fonts, commonImages, commonStaticImages, commonSvg, images)
);
