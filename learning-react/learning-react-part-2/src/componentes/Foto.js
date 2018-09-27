import React, { Component } from 'react';
import { Link } from 'react-router';

class FotoAtualizacoes extends Component {

  like(e) {
    e.preventDefault();
    this.props.like(this.props.foto.id);
  }

  comenta(e) {
    e.preventDefault();
    this.props.comenta(this.props.foto.id, this.comentario.value);
  }

  render() {
    return (
      <section className="fotoAtualizacoes">
        <a onClick={this.like.bind(this)} className="fotoAtualizacoes-like">Like</a>
        <form className="fotoAtualizacoes-form" onSubmit={this.comenta.bind(this)}>
          <input
            type="text"
            placeholder="Adicione um comentário..."
            className="fotoAtualizacoes-form-campo"
            ref={input => this.comentario = input}
          />
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
              return (
                <Link
                  to={`/timeline/${liker.userId}`}
                  key={liker.userId}>
                  {liker.userId},
                </Link>
              )
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
                <li key={comentario.id} className="comentario">
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
            <Link to={`/timeline/${this.props.foto.userId}`}>
              {this.props.foto.userId}
            </Link>
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
        <FotoAtualizacoes {...this.props} />
      </div>
    );
  }
}