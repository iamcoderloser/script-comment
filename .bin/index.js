#!/usr/bin/env node

const {Command} = require('commander')
const {getPackageJson,setPackageJson} = require('./packageJsonHelper.js')

const program = new Command()

const defaultStorage = "scriptsWithComment"


program
  .description("用于package.json无法添加注释，导致scripts中的脚本不知道有何用，故在package.json添加一个map用于保存script和注释，同时提供了将scripts映射到map，也可以将map生成scripts")
  .option('-i, --init', '初始化工程，包含一个示例规范的带注释的script，在package.json的scriptsWithComment中', () => {
    const pkgJson = getPackageJson()
    if (pkgJson[defaultStorage]) {
      console.log('工程已经完成了初始化，无需再次初始化！')
      return
    }
    const scriptsWithComment = {
      "example": {
        "cmd": "echo 'example'",
        "desc": "用于描述命令的作用"
      }
    }
    pkgJson[defaultStorage] = scriptsWithComment
    setPackageJson(pkgJson)
  })
  .option('-g, --generate', '构建npm script，将带注释的脚本(在package.json的scriptsWithComment中)生成可以在npm run中可以执行的sctipt', () => {
    generator((packageJson) => {
      const { scripts, scriptsWithComment: scriptsComment } = packageJson
      const duplicates = []
      Object.keys(scriptsComment).forEach(sc => {
        if (scripts[sc]) {
          duplicates.push(sc)
        } else {
          scripts[sc] = scriptsComment[sc].cmd
        }
      })
      return duplicates
    },`有重复{ $dk }的script，请检查！`,'生成script成功！')
  })
  .option('-rg, --regenerate', '生成初始注释内容，将scripts中的script添加到可以添加注释的scriptsWithComment中', () => { 
    generator((packageJson) => {
      const { scripts, scriptsWithComment: scriptsComment } = packageJson
      const duplicates = []
      Object.keys(scripts).forEach(sc => {
        if (scriptsComment[sc]) {
          duplicates.push(sc)
        } else {
          scriptsComment[sc] = {
            cmd: scripts[sc],
            desc:""
          }
        }
      })
      return duplicates
    },`有重复{ $dk }的script注释，请检查！`,'生成script注释模版成功，请添加注释！')
  })
  .version('0.0.1','','当前版本')

program.parse(process.argv)


function generator(todo,duplicateTips,succTips) {
  const packageJson = getPackageJson()
  if (!packageJson[defaultStorage]) {
    console.log('还没有初始化工程，请先执行pkgc -i初始化工程！')
    return
  }
  
  const duplicates = todo(packageJson)
  
  setPackageJson(packageJson)
  if (duplicates.length) {
    console.log(duplicateTips.replace('$dk',duplicates.join(' | ')))
  } else {
    console.log(succTips)
  }
}