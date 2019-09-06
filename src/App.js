import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './views/Home'
import Search from './views/Search'

import './App.css';

function App() {
	
	return (
		<Router>
			<>
				<Route path="/" component={Home} />
				<Route path="/search" component={Search} />
				<Route path="/tags" component={Search} />
			</>
		</Router>
	);
}
export default App;
