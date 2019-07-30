import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';

/* 没用router的前 */
// import RouterAlike from './learn/routerAlike';
/* 数据渲染 */
// import DataRender from './learn/dataRender'

import DataRender from './learn/dataRender'
ReactDOM.render(<DataRender />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
