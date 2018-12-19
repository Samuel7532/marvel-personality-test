import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import header from "./components/pages/header";
import Search from "./components/pages/Search";
import Discover from "./components/pages/Discover";
import './components/App.css';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={header} />
        <Route exact path="/Discover" component={Discover} />
        <Route exact path="/Search" component={Search} />
      </div>
    </Router>
  );
}

export default App;
