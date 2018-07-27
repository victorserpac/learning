import React, { Component } from 'react';
import { Link } from 'react-router';

class FotoAtualizacoes extends Component {

  like(e) {
    e.preventDefault();

    const requestInfo = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        photoId: this.props.foto.id,
        userId: localStorage.getItem('userId'),
      }),
    };

    fetch('http://localhost:3004/likes', requestInfo)
      .then(response => {
        console.log(response);
      })
  }

  render() {
    return (
      <section className="fotoAtualizacoes">
        <a onClick={this.like.bind(this)} className="fotoAtualizacoes-like">Like</a>
        <form className="fotoAtualizacoes-form">
          <input type="text" placeholder="Adicione um comentário..." className="fotoAtualizacoes-form-campo" />
          <input type="submit" value="Comentar!" className="fotoAtualizacoes-form-submit" />
        </form>
      </section>
    );
  }
}

class FotoInfo extends Component {
  render() {
    return (
      <div className="foto-in fo">
        <div className="foto-info-likes">
          {
            this.props.foto.likes.map((liker) => {
              return (<Link to={`/timeline/${liker.userId}`} key={liker.userId} href="#">{liker.userId},</Link>)
            })
          }
          curtiram
        </div>

        <p className="foto-info-legenda">
          <a className="foto-info-autor">autor </a>
          {this.props.foto.comentario}
        </p>

        <ul className="foto-info-comentarios">
          {
            this.props.foto.comments.map(comentario => {
              return (
                <li key={comentario.userId} className="comentario">
                  <Link to={`/timeline/${comentario.userId}`} className="foto-info-autor">{comentario.userId} </Link>
                  {comentario.comment}
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

class FotoHeader extends Component {
  render() {
    return (
      <header className="foto-header">
        <figure className="foto-usuario">
          <img src={this.props.foto.urlPerfil} alt="foto do usuario" />
          <figcaption className="foto-usuario">
            <a href="#">{this.props.foto.userId}</a>
          </figcaption>
        </figure>
        <time className="foto-data">{this.props.foto.horario}</time>
      </header>
    );
  }
}

export default class FotoItem extends Component {
  render() {
    return (
      <div className="foto">
        <FotoHeader foto={this.props.foto} />
        <img alt="foto" className="foto-src" src={this.props.foto.urlFoto} />
        <FotoInfo foto={this.props.foto} />
        <FotoAtualizacoes foto={this.props.foto} />
      </div>
    );
  }
}