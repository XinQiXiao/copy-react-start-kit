import React from 'react';
import { Route } from 'react-router';
import Base from 'components/base/Base'
import Home from 'components/home/Home'
import { AntdPage, RouterPage } from './components/content'

export default (
	<Route component={Base}>
		<Route path="/" component={Home}/>
		<Route path="/antd" component={AntdPage}/>
		<Route path="/router" component={RouterPage}/>
	</Route>
)
