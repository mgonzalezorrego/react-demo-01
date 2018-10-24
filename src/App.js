import React, { Component } from "react";
import { Grid, FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

export class App extends Component {
  state = {
    nombre: this.props.nombre
  };

  PresionarBoton = e =>{
    const nom = e.target.nombre.value
    e.preventDefault();
    if (typeof nom ==="string" && nom.length > 0){
        this.setState({
          nombre: nom
        });
        e.target.nombre.value="";
    }
  };


  render() {
    const { nombre } = this.state;
    const { msj } = this.props;
    //const { nombre, msj } = this.props;
    return (
      <Grid>
        <h1>Hola {nombre}! </h1>
        <p>{msj} </p>
        <form onSubmit={this.PresionarBoton}>
          <FormGroup>
            <ControlLabel>Nombre</ControlLabel>
            <FormControl type="text" id="nombre" name="nombre"/>
            <Button type="submit">Saludar</Button>
          </FormGroup>
        </form>
      </Grid>
    );
  }
}

App.defaultProps = {
  nombre: "React",
  msj: "Este es un Mensaje"
};

export default App;
