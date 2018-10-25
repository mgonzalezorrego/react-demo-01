import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import { MensajeSaludo } from "./MensajeSaludo";
import { FormaSaludo} from "./FormaSaludo"

export class Saludo extends Component {
  state = {
    nombre: this.props.nombre,
    msj: this.props.msj
  };



  manejarNuevoSaludo = datos => {
    this.setState(datos)
  };

  render() {
    const { nombre, msj } = this.state;
    //const { msj } = this.props;
    //const { nombre, msj } = this.props;
    return (
      <Grid>
        <MensajeSaludo nombre={nombre} msj={msj} />
        <FormaSaludo alObtenerNuevoSaludo={this.manejarNuevoSaludo}/>
      </Grid>
    );
  }
}

Saludo.defaultProps = {
  nombre: "React",
  msj: "Este es un Mensaje"
};

export default Saludo;
