/**
 * signup相关的路由处理
 */
const userModel = require('../service/mysql/user');
exports.signup = async ctx => {
  let resStr = '';
  // 测试sql - 插入一条新的数据
  let userInfo = {
    name: '杰瑞',
    password: '123456',
    sex: 'male',
    role: 'visitor',
    phone: '123456789001',
    email: 'fnix@stone.com.cn',
    lastModifyBy: 1
  };
  // 测试sql - 查询用户list
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
  // 测试sql - 插入一条新得user数据
  // await userModel.insertDetail(userInfo)
  //   .then(async (result) => {
  //     resStr += `增加一条数据：${JSON.stringify(result)}\n`;
  //   })
  //   .catch(async (err) => {
  //     ctx.logError.error(err);
  //   });

  // 测试sql - 根据id修改一条数据
  await userModel.updateByid(Object.assign({ id: 4 }, userInfo))
    .then(async (result) => {
      resStr += `修改id=4的数据：${JSON.stringify(result)}\n`;
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
