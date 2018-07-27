import React, { Component } from 'react';
import FotoItem from './Foto';

export default class Timeline extends Component {

  constructor(props) {
    super(props);
    this.state = { fotos: [] };
    this.login = this.props.login;
  }

  carregaFotos() {
    let url;

    if (this.login === undefined) {
      url = `http://localhost:3004/photos?_embed=likes&_embed=comments`;
    } else {
      url = `http://localhost:3004/photos?userId=${this.login}&_embed=likes&_embed=comments`;
    }

    fetch(url)
      .then(response => response.json())
      .then(fotos => {
        this.setState({ fotos: fotos });
      });
  }

  componentDidMount() {
    this.carregaFotos();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.login !== undefined) {
      this.login = nextProps.login;
      this.carregaFotos();
    }
  }

  render() {
    return (
      <div className="fotos container">
        {
          this.state.fotos.map(foto => <FotoItem key={foto.id} foto={foto}/>)
        }
      </div>
    );
  }
}