# node-backup
为麦麦搭建的nodejs后台开发脚手架，初始还是包括view的ssr结构，后面往前后端分离+同构渲染进化
这套架子搭起来的目的就是专注于业务开发
这不是个玩具 它在向着一套优质/有生产能力的脚手架成长

# 目录说明
```
|—— config              配置项文件
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

# 命令说明
## npm run dev 
* 启动开发阶段的测试（本地）服务器 *
## npm run i-for-prod
在产品/部署时 安装依赖 不会安装devDependencies指定的包
## npm run eslint
使用eslint对项目指定代码进行规范检查

# step
1. 搭建目录
2. 添加依赖(koa2 及 相关) + 服务器搭建（可以访问）
3. 路由建设
4. 静态资源（虽然后面会用nginx来做 但是该脚手架会自带静态资源）
4. view
5. log
6. error
7. eslint **觉得还是很有必要的**
8. ~~babel~~
9. 数据库部分建设（mysql + redis）
10. 缓存系统建设（cookie  + session + redis session）
11. nginx代理设置（可以用nginx代理 也可以直接node服务器服务：静态服务器 + 跨域问题处理）
12. 前后台分离架构设计 + Rest架构设计（restful接口层设计）
13. 后台渲染 - React的后台渲染
14. 业务层面实现三大基础业务：用户（注册/登录）系统 + 角色（权限）系统 + 列表（详情）系统 + 消息队列系统（也许暂时不需要）（带动/串动前面9-13的基础建设）-- 用业务驱动基础设施建设
14. 文件服务器   
14. 产品模式-部署上线 **ver.1 最小系统已经可以参与生产**
15. 持续集成
16. 中间层设计
17. 分布式设计


# test
* postman

# 迭代

## ver.0
ssr

## ver.1 
前后端分离（前端渲染） ==>  同构渲染

## ver.2
该架子上架到npm上 后面直接用npm去安装


# 愿景
1. 只管填充业务就好了
2. 有几个示例
3. 脚手架和加入了业务的脚手架分两个仓库管理 -- 这里只管升级进化脚手架 -- 哪个项目需要从这里clone即可
4. 请出一个Blog -- 《手把手教你搭建一个koa2脚手架》 -- 文档对于代码的维护性非常重要，避免你过2个月后突然看不懂自己的代码哈哈

# 参考
* [log4js](https://www.cnblogs.com/duhuo/p/5176154.html)
* 但是上面这篇log4js的配置是旧版的(在概念上讲得比较清楚)，后面会出一篇关于第三版log4js的使用Blog
* [新版的log4js的配置](https://github.com/log4js-node/log4js-example/blob/master/config/log4js.json)
* [新版的log4js配置-2](https://www.2cto.com/kf/201808/765953.html)
* [log4js官方推荐的配置 以此为主](https://github.com/log4js-node/log4js-example/blob/master/config/log4js.json)
* [log4js中间件的实现参考](https://blog.csdn.net/samfung09/article/details/83689133)

# 开发日志
* 日志系统 - [log4js](https://www.npmjs.com/package/log4js)
* 错误系统 - [koa-onerror](https://www.npmjs.com/package/koa-onerror)