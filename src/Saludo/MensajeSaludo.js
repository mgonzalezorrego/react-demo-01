import React, { Component } from 'react'

export class MensajeSaludo extends Component {
    
    render() {
    const { nombre, msj } = this.props;
    return (
      <div>
        <h1>Hola {nombre}! </h1>
        <p>{msj}</p>
      </div>
    )
  }
}

export default MensajeSaludo
