import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';

export class Home extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div style={{ flex: 1 }}>
        Home
      </div>
    );
  }
}

const defaultHome = inject('store')(observer(Home));
export default defaultHome;
