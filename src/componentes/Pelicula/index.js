import React, { Component } from 'react';
import { Grid, PageHeader} from "react-bootstrap";
import BuscarPelicula from './BuscarPelicula';

export class Pelicula extends Component {
  //creando una estructura estado
  state ={
    peliculas:[]
  }

  peliculaPorBuscar = async (e) => {
    const peliculaPorBuscar = e.target.elements.peliculaPorBuscar.value;
    e.preventDefault();
    const api_fetch = await fetch(
      `https://itunes.apple.com/search?term=${peliculaPorBuscar}&media=movie&country=MX`
    );
    const peliculas = await api_fetch.json();
    this.setState({peliculas: peliculas.results});
    console.log(this.state.peliculas);
  }

  render() {
    return (
      <Grid>
        <PageHeader>Lista de Películas</PageHeader>
        <BuscarPelicula peliculaPorBuscar={this.peliculaPorBuscar}></BuscarPelicula>
        {this.state.peliculas.map(pelicula => 
          <p key={pelicula.trackId}>{pelicula.trackName}</p>)}
      </Grid>
    )
  }
}

export default Pelicula
