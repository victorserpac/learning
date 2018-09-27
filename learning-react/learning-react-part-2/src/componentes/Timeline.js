import React, { Component } from 'react';
import FotoItem from './Foto';
import Pubsub from 'pubsub-js';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

export default class Timeline extends Component {

  constructor(props) {
    super(props);
    this.state = { fotos: [] };
    this.login = this.props.login;
  }

  componentWillMount() {
    Pubsub.subscribe('timeline', (topico, fotos) => {
      this.setState({ fotos });
    });

    Pubsub.subscribe('atualiza-liker', (topico, data) => {
      const { photoId, like } = data;

      const photo = this.state.fotos.find(foto => foto.id === photoId);

      photo.likes.push(like);      

      this.setState({ fotos: this.state.fotos });
    });

    Pubsub.subscribe('REMOVE_LIKE', (t, data) => {
      const { photoId, likeId } = data;
      const photo = this.state.fotos.find(foto => foto.id === photoId);

      photo.likes = photo.likes.filter(like => like.id !== likeId);

      this.setState({ fotos: this.state.fotos });
    });

    Pubsub.subscribe('novos-comentarios', (t, data) => {
      const { photoId, comment } = data;
      const photo = this.state.fotos.find(foto => foto.id === photoId);

      photo.comments.push(comment);
 
      this.setState({ fotos: this.state.fotos });
    });
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

  like(photoId) {
    const photo = this.state.fotos.find(foto => foto.id === photoId);
    const like = photo.likes.find(like => like.userId === localStorage.getItem('userId'));

    if (like) {
      const likeId = like.id;
      this.deleteLike(likeId)
        .then(success => {
          if (success) {
            Pubsub.publish('REMOVE_LIKE', { photoId, likeId });
          }
        });
    } else {
      this.createLike(photoId)
        .then(like => {
          if (like) {
            Pubsub.publish('atualiza-liker', { photoId, like });
          }
        });
    }
  }

  createLike(photoId) {
    const requestInfo = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        photoId,
        userId: localStorage.getItem('userId'),
      }),
    };

    return fetch('http://localhost:3004/likes', requestInfo)
      .then(response => {
        return response.ok ? response.json() : new Error('fuck shit');
      });
  }

  deleteLike(likeId) {
    const requestInfo = {
      method: 'DELETE',
    };

    return fetch(`http://localhost:3004/likes/${likeId}`, requestInfo)
      .then(response => {
        return response.ok;
      });
  }

  comenta(photoId, comment) {
    const requestInfo = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        photoId,
        userId: localStorage.getItem('userId'),
        comment,
      }),
    };

    fetch('http://localhost:3004/comments', requestInfo)
      .then(response => {
        return response.ok ? response.json() : new Error('fuck shit');
      })
      .then(comment => {
        Pubsub.publish('novos-comentarios', { photoId, comment });
      });
  }

  render() {
    return (
      <div className="fotos container">
        <ReactCSSTransitionGroup
          transitionName="timeline"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {
            this.state.fotos.map(foto => <FotoItem key={foto.id} foto={foto} like={this.like.bind(this)} comenta={this.comenta} />)
          }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}