starup Monorepo
--------------

## 项目列表
Name | Description
-----|------------
[@starup/util](./packages/util/README.md) | util 常用代码片段
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

```
