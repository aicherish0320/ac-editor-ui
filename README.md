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

## CI (Continuous Integration)

持续集成是指，频繁地（一天多次）将代码集成到主干。一旦开发人员对应用所做的更改被合并，系统就会通过自动构建应用并运行不同级别的自动化测试来验证这些更改，确保这些更改没有对应用造成破坏

- 快速发现错误
- 防止分支大幅偏离主干

持续集成的目的，就是让产品可以快速迭代，同时还能保持高质量

## CD(Continuous Delivery) 持续交付

- 持续交付指的是，频繁地将软件的新版本，交付给质量团队或者用户，以供评审。

## CD(Continuous Deployment) 持续部署

- 持续部署是持续交付的下一步，指的是代码通过评审以后，自动部署到成产环境。

## Webpack VS Rollup

- Webpack
  - 大型 SPA 项目的模块化构建，也就是我们常说的 web 应用
  - 通过各种 Loader 处理各种各样的静态资源
  - 通过各种插件 Plugins 对整体文件进行一些处理
  - Code Splitting 将公共模块进行提取
  - 提供一个 webpack-dev-server，进行本地开发
  - 支持 HMR 模块热替换
- Rollup
  - Rollup 设计之初就是面向 ES Module 的，构建出结构扁平，性能出众的类库
  - ES Module 的规则
    - import 只能作为模块顶层的语句出现，不能出现在 Function 里面或是 if 里面
    - import 的模块名只能是字符串常量
    - 不管 import 的语句出现的位置在哪里，在模块初始化的时候所有的 import 都必须已经导入完成
  - Tree Shaking
  - 目的是将 es Module 打包生成特定的 JS 模块文件，并减少它的体积

> 构建 App 应用时，webpack 比较合适，如果是类库，Rollup 更加合适

### Webpack 优势

- 强大的生态插件
- 面向开发应用的特性支持 HMR，按需加载，公共模块提取
- 简化 web 开发的环节，图片自动转 base64，资源缓存

### Rollup 优势

- 构建高性能的模块文件，这正是类库所需要的
- 编译出来的代码可读性好，内容更小，执行效率更高
- 配置比较简单
