const path = require('path');
const Koa = require('koa');
const static = require('koa-static');
const views = require('koa-views');
const bodyParser = require('koa-bodyparser');
const json = require('koa-json');
const onerror = require('koa-onerror');
const router = require('./router');
const log = require('./middleware/log4js')

const app = new Koa();
// 加载错误系统
onerror(app);
// PORT 端口号 -- 后面放到配置文件
const PORT = 3001;

// 静态资源
app.use(static(path.join(__dirname, 'public')));

/**
* 配置服务端模板渲染引擎中间件 -- 一定要在任何路由之前使用
* (注意很多中间件都要在路由之前使用 不然在路由到某个业务时 该中间件还未加载)
*/
app.use(views(path.join(__dirname, 'views'), {
  extension: 'ejs'
}));

/**
 * 处理post请求中的body
 */
app.use(bodyParser({
  formLimit: '1mb'
}));

/**
 * 使响应为json格式
 * 1- 省去每次对Content-Type的设置
 */
app.use(json());

/**
 * 加载日志系统-把日志系统对象挂载到ctx上
 */
app.use(log())

// 路由
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(PORT);
console.log(`Listening on port http://127.0.0.1:${PORT}`);