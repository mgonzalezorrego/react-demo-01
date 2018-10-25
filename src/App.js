import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import { MensajeSaludo } from "./MensajeSaludo";
import { FormaSaludo} from "./FormaSaludo"

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

  manejarNuevoNombre = nombre => {
    this.setState({
      nombre: nombre
    })
  }

  render() {
    const { nombre } = this.state;
    const { msj } = this.props;
    //const { nombre, msj } = this.props;
    return (
      <Grid>
        <MensajeSaludo nombre={nombre} msj={msj} />
        <FormaSaludo alObtenerNuevoNombre={this.manejarNuevoNombre}/>
      </Grid>
    );
  }
}

App.defaultProps = {
  nombre: "React",
  msj: "Este es un Mensaje"
};

export default App;
