import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import landingpage from "./components/pages/landingpage";
import Search from "./components/pages/Search";
import heropage from "./components/pages/heropage";
import './components/App.css';
// import "./components/Script/landingpage";
import './components/heropage.css';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={landingpage} />
        <Route exact path="/heropage" component={heropage} />
        <Route exact path="/Search" component={Search} />
      </div>
    </Router>
  );
}

export default App;
