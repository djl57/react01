import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';

/* 没用router的前 */
// import RouterAlike from './learn/routerAlike';
/* 使用router */
import UseRouter from './router/index';
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
ReactDOM.render(<UseRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
