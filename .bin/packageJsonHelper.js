const fs = require('fs')
const path = require('path')

const packagePath = path.resolve(process.cwd(), 'package.json')


function getPackageJson() {
  if (!fs.existsSync(packagePath)) return null
  return JSON.parse(fs.readFileSync(packagePath))
}

function setPackageJson(pjson) {
  fs.writeFileSync(packagePath,JSON.stringify(pjson, '','\t'))
}


module.exports = {
  getPackageJson,
  setPackageJson
}

