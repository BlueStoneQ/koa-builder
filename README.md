# node-backup
为麦麦搭建的nodejs后台开发脚手架，初始还是包括view的ssr结构，后面往前后端分离+同构渲染进化

# 目录说明
```
|—— controller          路由对应的业务逻辑层
|—— log
|—— middleware
|—— node_modules
|—— public
|—— router
|—— service
|—— view
|—— app.js
|—— package.json
```

# 测试命令说明

## test 
在开发过程中测试/启动服务

## i-for-prod
在产品/部署时 安装依赖 不会安装devDependencies指定的包

# step
1. 搭建目录
2. 添加依赖(koa2 及 相关) + 服务器搭建（可以访问）
3. 路由建设
4. view
5. log
6. error
7. eslint
8. babel
9. 数据库部分建设（mysql + redis）
10. 缓存系统建设（session + redis session）
11. 日志系统建设
12. nginx代理设置（可以用nginx代理 也可以直接node服务器服务）

# test
* postman

# 迭代

## ver.0
ssr

## ver.1 
前后端分离（前端渲染） ==>  同构渲染


# 愿景
1. 只管填充业务就好了
2. 有几个示例
3. 脚手架和加入了业务的脚手架分两个仓库管理 -- 这里只管升级进化脚手架 -- 哪个项目需要从这里clone即可
