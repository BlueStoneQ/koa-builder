/**
 * 路由模块-登录
 */
const controller = require('../controller');

module.exports = (router) => {
  router.get('/signin', controller.signin)
}