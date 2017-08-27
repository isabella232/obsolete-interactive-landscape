import React, { Component } from 'react';

import ProductTitle from './components/ProductTitle';
import './index.css';


class ProductPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'this is Product',
    };
  }

  render() {
    const state = this.state;
    return (
      <div className="productPanel">
        {state.title}
        <ProductTitle />
      </div>

    );
  }
}


export default ProductPanel;

