import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import "normalize.css/normalize.css";
import * as serviceWorker from "./serviceWorker";

/* 
RouterAlike 没用router前
使用router：
UseRouter 基本
ParamsExample url参数
AuthExample 重定向（Auth）
CustomLink 自定义链接
*/
// import RouterAlike from './learn/routerAlike';
// import UseRouter from './router/index';
// import ParamsExample from "./router/ParamsExample";
// import AuthExample from './router/AuthExample';
// import CustomLink from './router/CustomLink';

/* react基础：
DataRender 数据渲染
Smzq 生命周期
Sjcl 事件处理
IfFor 条件和循环
FormItem 表单
StateUp 状态提升
CompositionInheritance 组合&继承
 */
// import DataRender from './learn/dataRender'
// import Smzq from './learn/smzq'
// import Sjcl from './learn/sjcl'
// import IfFor from './learn/ifFor'
// import FormItem from './learn/form'
// import StateUp from './learn/stateUp'
// import CompositionInheritance from './learn/CompositionInheritance'

/* blog相关：
BlogHeader 顶部
*/
// import BlogHeader from './view/blog/blogHeader.js'

/* 其他：*/
// import Example01 from './view/example01'

/* 使用redux：
StoreExample 生成store并定义actions
UseStore 在组件中使用生成的store
 */
import './learn/StoreExample.js'
import UseStore from './learn/UseStore.js'

ReactDOM.render(<UseStore />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
