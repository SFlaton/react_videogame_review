import React from 'react';
import jQuery from 'jquery';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      game: {}
    };
  }

  componentDidMount() {
    this.getGame();
  }

  getGame() {
    let component = this;
    let url = "https://guarded-fjord-30628.herokuapp.com/categories/"+ this.props.params.categoryId +"/games/" + this.props.params.gameId + ".json";
    jQuery.getJSON(url, function(data) {
      component.setState({
        game: data.game
      });
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Game: {this.state.game.title}</h1>
        <p>ID: {this.props.params.gameId}</p>
        {this.props.children}
      </div>
    );
  }
}

export default Game;
