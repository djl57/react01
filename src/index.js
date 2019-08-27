import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import * as serviceWorker from "./serviceWorker";

/* 没用router的前 */
// import RouterAlike from './learn/routerAlike';
/* 使用router：
UseRouter 基本
ParamsExample url参数
AuthExample 重定向（Auth）
CustomLink 自定义链接
*/
// import UseRouter from './router/index';
import ParamsExample from "./router/ParamsExample";
// import AuthExample from './router/AuthExample';
// import CustomLink from './router/CustomLink';
/* 数据渲染 */
// import DataRender from './learn/dataRender'
/* 生命周期 */
// import Smzq from './learn/smzq'
/* 事件处理 */
// import Sjcl from './learn/sjcl'
/* 条件和循环 */
// import IfFor from './learn/ifFor'
/* 表单 */
// import FormItem from './learn/form'
/* 状态提升 */
// import StateUp from './learn/stateUp'
/* 组合&继承 */
// import CompositionInheritance from './learn/CompositionInheritance'
// import Example01 from './view/example01'
ReactDOM.render(<ParamsExample />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
