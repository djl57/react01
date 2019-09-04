import { getToken, removeToken } from "./cookie";
import { auth } from "../api/index";
import { message } from "antd";

const SUCCESS = "200";
const whiteList = ["/app/register", "/app/login", "/app/blog", "/app/home"];

export const checkAuth = to => {
  console.log("checkAuth===>", to);

  return new Promise(async (resolve, reject) => {
    if (getToken()) {
      const res = await auth();
      if (res.code === SUCCESS) {
        if (to === "/app/login") {
          message.error("您已登录！");
        } else {
          resolve(res);
        }
      } else {
        removeToken();
      }
    } else {
      if (whiteList.includes(to)) {
        resolve();
      } else {
        message.error("未登录！");
        reject();
      }
    }
  });
};
