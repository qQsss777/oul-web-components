import { writeFileSync, readFileSync } from "fs";

const pkg = JSON.parse(readFileSync("./package.json", "utf-8"));
const minimalPkg = {
  name: pkg.name,
  version: pkg.version,
  author: pkg.author,
  main: "index.js",
  module: "index.js",
  type: pkg.type,
  files: [".", "code-block"],
  license: pkg.license,
};

writeFileSync("./dist/package.json", JSON.stringify(minimalPkg, null, 2));
