import React from 'react';
import jQuery from 'jquery';
import {Link} from 'react-router';
import Category from './Category';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories() {
    let component = this;
    let url = "https://guarded-fjord-30628.herokuapp.com/categories.json";
    jQuery.getJSON(url, function(data) {
      component.setState({
        categories: data.categories
      });
    });
  }

  render() {
    return(
      <div className="container">
        <h1>Categories!</h1>
        <ul>
          {this.state.categories.map(function(category) {
            return(
              <li key={category.id}>
              <Link to={`/categories/${category.id}`}>
              {category.name}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default Categories;
