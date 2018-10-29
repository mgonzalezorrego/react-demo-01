import React, { Component } from 'react';
import { Grid, Row, PageHeader} from "react-bootstrap";
import BuscarPelicula from './BuscarPelicula';
import PeliculasEncontradas from './PeliculasEncontradas';

export class Pelicula extends Component {
  //creando una estructura estado
  state ={
    peliculas:[],
    Cargando: false
  }

  peliculaPorBuscar = async (e) => {
    const peliculaPorBuscar = e.target.elements.peliculaPorBuscar.value;
    e.preventDefault();
    const api_fetch = await fetch(
      `https://itunes.apple.com/search?term=${peliculaPorBuscar}&media=movie&country=MX`
    );

    this.setState({Cargando: true});

    const peliculas = await api_fetch.json();
    this.setState({peliculas: peliculas.results, Cargando: false});
    console.log(this.state.peliculas);
  }

  render() {
    if(this.state.Cargando){
      return <p>Cargando...</p>;
    }
    return (
      <Grid>
        <Row>
          <PageHeader>Lista de Películas</PageHeader>
          <BuscarPelicula peliculaPorBuscar={this.peliculaPorBuscar}></BuscarPelicula>
        </Row>
        
        <Row>
          <br />
          <PeliculasEncontradas peliculas={this.state.peliculas}/>
        </Row>
          
      </Grid>
    )
  }
}

export default Pelicula
