import React from 'react';
import jQuery from 'jquery';

class Review extends React.Component{
  constructor() {
    super();
    this.state = {
      review: {}
    };
  }

  componentDidMount() {
    this.getReview();
  }

  getReview() {
    let component = this;
    let url = "https://guarded-fjord-30628.herokuapp.com/categories/"+ this.props.params.categoryId +"/games/" + this.props.params.gamesId + "reviews.json";
    jQuery.getJSON(url, function(data) {
      component.setState({
        game: data.review
      });
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Review title: {this.state.review.title}</h1>
        <p>{this.props.params.reviewContent}</p>
        {this.props.children}
      </div>
    );
  }
}
export default Review;
