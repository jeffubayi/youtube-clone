import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Layouts/Home/Home";
import BottomNav from "./Layouts/BottomNavbar";
import Navbar from "./Layouts/Navbar/Navbar";

import { Wrapper } from "./assets/CSS/Globalstyles";

export default function App() {
  return (
    <Router>
      <Wrapper>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <BottomNav />
      </Wrapper>
    </Router>
  );
}
