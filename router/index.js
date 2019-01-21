/**
 * 这个文件就是后面把所有的子路由收集起来 使用router暴露出去
 */
const Router = require('koa-router');
const controller = require('../controller');
const signup = require('./signup');
const signin = require('./signin');
const router = new Router();

router.get('/', controller.handle);

// 注册部分子路由
signup(router);
signin(router);

module.exports = router;
