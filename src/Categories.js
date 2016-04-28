import React from 'react';

class Categories extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Categories!</h1>
        {this.props.children}
        </div>
    );
  }
}

export default Categories;
