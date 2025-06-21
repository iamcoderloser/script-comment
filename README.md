# script-comment 📝

一个 Node.js 工具，用于给package.json中的脚本添加注释。

> JSON 格式本身不支持注释，导致在package.json中的 `scripts` 字段难以添加说明。  
> 此工具通过维护一个与 `scripts` 平行的注释映射表，帮助你管理带注释的脚本并生成可执行脚本。

---

## 📦 安装

使用 npm 安装：

```bash
npm install script-comment
```

---

## 🛠️ 使用方法

### 初始化项目配置

```bash
scrc -i
```

### 从带注释脚本生成可执行脚本

```bash
scrc -g
```

### 从可执行脚本生成注释模板

```bash
scrc -rg
```

---

## 🧠 工作原理

该工具会在package.json 中维护一个与 `scripts` 同级的字段 `scriptsCommentMap`，用于保存注释信息。

你可以编写带有注释的脚本映射，并将其转换为实际可执行的脚本，也可以反向操作，从现有脚本生成注释模板。

示例结构如下：

```json
{
  "scripts": {
    "example": "node app.js"
  },
  "scriptsCommentMap": {
    "example": {
			"cmd": "echo 'example'",
			"desc": "dfdf"
		},
  }
}
```

---

## ✨ 主要特性

- ✅ 支持双向同步：注释 ↔ 可执行脚本  
- 🗂️ 自动维护 package.json 注释映射  
- 💡 简化多脚本项目的可维护性  

---

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

---


- [文档地址](#)
- [示例代码](#)

---

🌟 如果你觉得这个项目有帮助，请给它一个 Star！让更多人看到这个实用的小工具。
```

---

### ✅ 下一步建议（可选）

你可以根据项目发展添加以下内容来进一步完善文档：

- **CHANGELOG.md**：记录版本更新内容
- **CONTRIBUTING.md**：贡献者指南
- **LICENSE**：选择合适的开源协议（如 MIT）
- **API 文档**：如果提供编程接口调用能力

如需我帮你将当前 [README.md](file://d:\lyn\开源\script-comment\README.md) 替换为此优化版本，请告诉我。