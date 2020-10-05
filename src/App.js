import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/index";
import Navigation from "./components/Navigation/Navigation";
import About from "./components/About/About";
import Categories from "./components/Categories/Categories";
import Cupcakes from "./components/Cupcakes/Cupcakes";
import Cupcake from "./components/Cupcake/Cupcake";
import Logo from "./components/Logo/Logo";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Logo />
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/cupcakes/:id" component={Cupcake} />
        <Route path="/categories" component={Categories} />
        <Route path="/cupcakes" component={Cupcakes} />
      </Switch>
    </div>
  );
}

export default App;
