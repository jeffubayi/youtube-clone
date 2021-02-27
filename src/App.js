import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Wrapper } from "./Globalstyles";
import Home from "./Pages/Home/Home";
import BottomNav from "./Layouts/BottomNavbar";
import Navbar from "./Layouts/Navbar/Navbar";

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
