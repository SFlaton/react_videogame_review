import React from 'react';
import Categories from './Categories';
import jQuery from 'jquery';

class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      category: {}
    };
  }

  componentDidMount() {
    this.getCategory();
  }

  getCategory() {
    let component = this;
    let url = "https://guarded-fjord-30628.herokuapp.com/categories/"+ this.props.params.categoryId +"/games.json";
    jQuery.getJSON(url, function(data) {
      component.setState({
        category: data.category
      });
    });
  }


  render() {
    return (
      <div className="container">
        <h1>Console: {this.state.category.name}</h1>
        <p>ID: {this.props.params.categoryId}</p>
        {this.props.children}
      </div>
    );
  }
}

export default Category;
