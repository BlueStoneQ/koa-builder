const path = require('path');
const Koa = require('koa');
const static = require('koa-static');
const views = require('koa-views');
const bodyParser = require('koa-bodyparser');
const router = require('./router');

const app = new Koa();
// PORT 端口号 -- 后面放到配置文件
const PORT = 3000;

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

// 路由
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(PORT);
console.log(`Listening on port http://127.0.0.1:${PORT}`);
