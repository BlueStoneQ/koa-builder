/**
 * signup相关的路由处理
 */
const userModel = require('../service/mysql/user');
exports.signup = async ctx => {
  let resStr = '';
  // 可以查询数据 然后在这里打印测试下哈哈
  await userModel.getList()
    .then(async (result) => {
      resStr += `从用户表中查到的信息：${JSON.stringify(result)}\n`;
    })
    .catch(async err => {
      ctx.logError.error(err);
    });
  // 测试sql - 根据id查询user信息
  await userModel.getDetailById(1)
    .then(async (result) => {
      resStr += `查到id为1的用户数据为：${JSON.stringify(result)}\n`;
    })
    .catch(async err => {
      ctx.logError.error(err);
    });
  // 测试sql - 根据id查询user信息
  let userInfo = {
    name: '菲尼克斯',
    password: '123456',
    sex: 'male',
    role: 'visitor',
    phone: '123456789001',
    email: 'fnixstone.com.cn',
    lastModifyBy: 1
  };
  await userModel.insertDetail(userInfo)
    .then(async (result) => {
      resStr += `增加一条数据：${JSON.stringify(result)}\n`;
    })
    .catch(async (err) => {
      ctx.logError.error(err);
    });
  ctx.body = resStr;
};

exports.signupView = async ctx => {
  await ctx.render('head', {
    title: 'ejs模板'
  });
};
