import React from 'react';
import jQuery from 'jquery';
import {Link} from 'react-router';
import Categories from './Categories'

class Games extends React.Component {
  constructor() {
    super();
    this.state = {
      games: []
    };
  }

  componentDidMount() {
    this.getGames();
  }

  getGames() {
    let component = this;
    let url = "https://guarded-fjord-30628.herokuapp.com/categories/"+ this.props.params.categoryId +"/games.json";
    jQuery.getJSON(url, function(data) {
      component.setState({
        games: data.games
      });
    });
  }
  render() {
    let component = this;
    return(
      <div className="container">
      <h1>Games:</h1>
      <ul>
        {this.state.games.map(function(game) {
          return(
            <li key={game.id}>
            <Link to={`/categories/${component.props.params.categoryId}/games/${game.id}`}>
            {game.title}</Link>
            </li>
          )
        })}
      </ul>
      </div>
    );
  }
}

export default Games;
