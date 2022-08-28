# ac-editor-ui

## npm 依赖的分类

- dependencies
  - 运行项目业务逻辑需要依赖的第三方库
  - npm install 模块名称的时候都会被解析，下载
- devDependencies
  - 开发模式工作流下依赖的第三方库
  - 单元测试、语法转换、lint 工具、程序构建、本地开发
- peerDependencies
  - 需要核心依赖库，不能脱离依赖库单独使用
