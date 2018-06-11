import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
// TODO 
import routes from './routes';

import 'font-awesome/css/font-awesome.css';
import 'antd/dist/antd.min.css';

import configureStore from './store/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, null)

export default class AppRoot extends Component{
	render(){
		return(
			<Provider >
				<Router history={history} routes={routes}/>
			</Provider>
		)
	}
}