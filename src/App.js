import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Wrapper } from "./Globalstyles";
import Home from "./components/Home/Home";
import BottomNav from "./components/BottomNavbar";
import Navbar from "././components/Navbar/Navbar";

export default function App() {
  return (
    <Router>
      <Wrapper>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <BottomNav/>
      </Wrapper>
    </Router>
  );
}
