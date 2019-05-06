import React from 'react';
import { shallow } from 'enzyme';
import TestSaga from '../testSaga';

describe('<HomeComponent />', () => {
  const shallowWrapper = shallow(<TestSaga />);

  it('should contain text in h1 tag', () => {
    expect(shallowWrapper.find('.home__title').html()).toContain('Welcome to Apparisal');
  });
});
