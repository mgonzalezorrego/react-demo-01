import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import { Saludo } from "./Saludo/index";
import { Pelicula }  from "./Pelicula";
import { Menu } from "./Menu";
import PaginaNoExiste from "./PaginaNoExiste";

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <Switch> 
            <Route path="/" component={Saludo} exact />
            <Route path="/peliculas" component={Pelicula} />
            <Route component={PaginaNoExiste} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
