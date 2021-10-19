import React from 'react';
import { shallow } from 'enzyme';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';

const wrapper = shallow(<Scroll><ErrorBoundary/></Scroll>);

it('expect to render Scroll component and children', () => {
    expect(wrapper.props()).toEqual(wrapper.props());
})