import React from 'react';
import jQuery from 'jquery';
import {Link} from 'react-router';

class Reviews extends React.Component{
  constructor() {
    super();
    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    let component = this;
    let url = "https://guarded-fjord-30628.herokuapp.com/categories/"+ this.props.params.categoryId +"/games/" + this.props.params.gameId + "reviews.json";
    jQuery.getJSON(url, function(data) {
      component.setState({
        reviews: data.reviews
      });
    });
  }

  render(){
    let component = this;
    return (
      <div className="container">
      <h2>Reviews:</h2>
      <ul>
        {this.state.reviews.map(function(review) {
          return(
            <li key={review.id}>
            <h3>{review.title}</h3>
            <p>{review.content}</p>
            </li>
          )
        })}
      </ul>
      </div>
    );
  }
}

export default Reviews;
