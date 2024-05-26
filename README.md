# script-comment
[lyn-do](https;//lyn-doit.github.com)  
nodejs 用于给script添加注释

## 安装和使用

 ```javascript
 
 npm i script-comment

 scrc -i  # 初始化工程

 scrc -g  # 将带注释script转成可执行script

 scrc -rg  # 将可执行script生成可注释模版 
 ```

 ## 为什么需要

 由于json本身无法添加注释，使得pacakge.json的scritps无法添加注释，过多的sctip无法直接了解作用，通过在package.json添加一个与scripts同级的map，用于保存script的注释。同时提供了将注释的map。生成可执行的map，也提供了将可执行的script生成初始注释模板。