/**
 * 路由模块 - 注册
 * 1- 返回的实际上是一个函数
 * 函数作用：把注册部分的路由注册到注入的Router对象
 */
const controller = require('../controller');

module.exports = (router) => {
  router.get('/signup', controller.signup);
  router.get('/signupView', controller.signupView);
};
