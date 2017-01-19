var Shell = require('child_process');

function postBuild(pages, callback) {
  Shell.execSync("cp -r assets/* public/")
  callback()
}

module.exports = { postBuild };
