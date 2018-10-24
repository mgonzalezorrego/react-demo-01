import React, { Component } from "react";
import { Grid } from "react-bootstrap";

export class App extends Component {
  render() {
    const { nombre, msj } = this.props;
    return (
      <Grid>
        <h1>Hola {nombre}! </h1>
        <p>{msj} </p>
      </Grid>
    );
  }
}

App.defaultProps = {
  nombre: "React",
  msj: "Este es un Mensaje"
};

export default App;
