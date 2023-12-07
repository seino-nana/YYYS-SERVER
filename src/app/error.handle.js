const errorTypes = require("../constants/error-types");

const errorHandler = (error, ctx) => {
  let status, message;
  switch (error.message) {
    case errorTypes.NAME_OR_PASSWORD_IS_REQUIRED:
      status = 400; // Bad Request
      message = "用户名或密码不能为空";
      break;

    case errorTypes.USER_ALREADY_EXISTS:
      status = 409; // conflict
      message = "用户名已存在";
      break;

    case errorTypes.USER_DOES_NOT_EXISTS:
      status = 401; // Bad Request
      message = "用户名不存在";
      break;

    case errorTypes.PASSWORD_IS_INCURRENT:
      status = 401; // Bad Request
      message = "密码错误";
      break;

    case errorTypes.UNAUTHORIZATION:
      status = 401;
      message = "无效的token";
      break;

    case errorTypes.NOT_ROOT:
      status = 401; // 没有权限
      message = "没有这个权限";
      break;

    default:
      status = 404;
      message = "NOT FOUND";
  }
  ctx.status = status;
  ctx.body = message;
};
module.exports = errorHandler;
