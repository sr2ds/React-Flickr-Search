import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import SearchBar from './components/SearchBar'
import Search from './components/Search'
import Tags from './components/Tags'

import './App.css';

function App() {
  return (
    <Router>
      <>
				<h1>Flickr Search</h1>
        <Route path="/" component={SearchBar}/>

        <Route path="/search" component={Search} />
        <Route path="/tags" component={Tags} />
      </>
    </Router>
  );
}
export default App;
