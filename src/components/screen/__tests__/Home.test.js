import React from 'react';
import { shallow, render } from 'enzyme';

import appStore from '../../../stores/appStore';
import Home from '../Home';

// test for the container page in dom
describe('Home page DOM rendering test', () => {
  const page = shallow(
    <Home store={appStore} />,
  );

  it('Tab1 page has to be matched to snapshot', () => {
    expect(page).toMatchSnapshot();
  });
});
