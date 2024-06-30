const fs = require("fs");
const path = require("path");

let PROJECT_ROOT_DIR;

function getProjectRootDir() {
  if (!PROJECT_ROOT_DIR) {
    let currentDir = process.cwd();
    while (!fs.existsSync(path.resolve(currentDir, "docker-compose.yml"))) {
      currentDir = path.resolve(currentDir, "..");
      if (currentDir === "/") {
        throw new Error("Could not find docker-compose.yml");
      }
    }
    PROJECT_ROOT_DIR = currentDir;
  }
  return PROJECT_ROOT_DIR;
}

module.exports = { getProjectRootDir };
