import { message } from "antd";
import { getToken } from "../utils/cookie";

const status = {
  SUCCESS: "200",
  NET_ERR: "201", // 网络连接异常
  PARAMS_A: "202", // 参数缺少
  PARAMS_B: "203", // 参数结构错误
  NO_AUTH_A: "204", // 未经授权的请求
  NO_AUTH_B: "205", // 令牌失效
  BIZ_ERR: "206", // 业务请求异常
  SQL_ERR: "207" // 数据库操作异常
};

const rejectData = { code: -1, msg: "网络错误" };
const responseHeaders = { "Content-Type": "application/json; charset=utf-8", Authorization: getToken() };

const getMessage = data => {
  if (data.msg) {
    switch (data.code) {
      case status.SUCCESS:
        message.success(data.msg);
        break;
      default:
        message.error(data.msg);
        break;
    }
  }
};

export const getData = (url, params) => {
  if (params) {
    let paramsArray = [];
    Object.keys(params).forEach(key => paramsArray.push(key + "=" + params[key]));
    if (url.search(/\?/) === -1) {
      url += "?" + paramsArray.join("&");
    } else {
      url += "&" + paramsArray.join("&");
    }
  }
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "GET",
      headers: responseHeaders
    })
      .then(response => response.json())
      .then(data => {
        getMessage(data);
        resolve(data);
      })
      .catch(err => {
        getMessage(rejectData);
        reject(err);
      }); // 仅当网络故障时或请求被阻止时，才会标记为 reject
  });
};

export const postData = (url, body) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: responseHeaders
    })
      .then(response => response.json())
      .then(data => {
        getMessage(data);
        resolve(data);
      })
      .catch(err => {
        getMessage(rejectData);
        reject(err);
      });
  });
};

export const deleteData = (url, body) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "DELETE",
      headers: responseHeaders
    })
      .then(response => response.json())
      .then(data => {
        getMessage(data);
        resolve(data);
      })
      .catch(err => {
        getMessage(rejectData);
        reject(err);
      });
  });
};

export const putData = (url, body) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: responseHeaders
    })
      .then(response => response.json())
      .then(data => {
        getMessage(data);
        resolve(data);
      })
      .catch(err => {
        getMessage(rejectData);
        reject(err);
      });
  });
};
