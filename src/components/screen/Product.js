import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';

export class Product extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div style={{ flex: 1 }}>
        Product: {this.props.match.params.id}
      </div>
    );
  }
}

const defaultProduct = inject('store')(observer(Product));
export default defaultProduct;
