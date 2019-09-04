import { getToken, removeToken } from "./cookie";
import { auth } from "../api/index";
import { message } from "antd";

const SUCCESS = "200";
const whiteList = ["/app/register"];

export const checkAuth = to => {
  console.log(to);
  if (whiteList.includes(to)) return;
  return new Promise(async (resolve, reject) => {
    if (getToken()) {
      const res = await auth();
      if (res.code === SUCCESS) {
        resolve(res);
      } else {
        removeToken();
      }
    } else {
      message.error("未登录！");
    }
  });
};
