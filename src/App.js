import React from "react";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache, HttpLink, ApolloClient, from } from "@apollo/client";
import { Switch, Route } from "react-router-dom";
import { ApolloLink } from "@apollo/client";
import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
