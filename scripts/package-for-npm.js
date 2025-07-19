import { writeFileSync, readFileSync } from "fs";

const pkg = JSON.parse(readFileSync("./package.json", "utf-8"));
const minimalPkg = {
  name: pkg.name,
  version: pkg.version,
  author: pkg.author,
  main: pkg.main,
  module: pkg.module,
  type: pkg.type,
  files: ["."],
  license: pkg.license,
};

writeFileSync("./dist/package.json", JSON.stringify(minimalPkg, null, 2));
