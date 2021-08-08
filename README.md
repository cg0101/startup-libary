starup Monorepo
--------------

## 项目列表
Name | Description
-----|------------
[@starup/asserts](./packages/asserts/README.md) | Asserts 断言工具
[@starup/events](./packages/events/README.md) | EventTarget 同步事件分发系统



## 基本使用
```bash
# 登陆
npm login --scope=@starup --registry=https://npmjs.org/

# 安装依赖
npm i @starup/{asserts} --save-prod
# or
yarn add @starup/{asserts}
```

## 本地开发
```bash
# 首次安装
yarn && yarn lerna bootstrap

# 登陆
npm login --registry=https://npmjs.org/

# 查看是否已经登陆
npm whoami --registry=https://npmjs.org/

# 交互式代码提交(commitizen)
yarn commit

# 为特定的子项目安装 npm 依赖
# 下面这行代码将为 `@starup/events` 子项目安装 `tslib` 依赖包
# 更多参考: https://github.com/lerna/lerna/tree/main/commands/add
yarn lerna add --scope @starup/events tslib

# 编译
yarn build

# 运行单元测试
yarn test

# 运行 eslint
yarn eslint

# 发布
yarn release

# 发布流程
# - 1) 请先依次运行 `yarn build`, `yarn test`, `yarn eslint` 确保项目编译没有出现错误。
# - 2) 发布之前使用 `npm whoami` 确保你已经通过 `npm login` 登录到公司的 npm registry，否则发布会失败。
# - 3) 确保当前工作区没有未提交的文件。
# - 4) 运行 `yarn release` 触发发布流程。
```
