import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './views/Header'
import Search from './views/Search'
import Tags from './views/Tags'

import './App.css';

function App() {
	return (
		<Router>
			<>
				<Route path="/" component={Header} />
				<Route path="/search" component={Search} />
				<Route path="/tags" component={Tags} />
			</>
		</Router>
	);
}
export default App;
