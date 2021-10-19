import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';

const wrapper = shallow(<SearchBox />);

it('expect to render SearchBox', () => {
    expect(wrapper).toMatchSnapshot();
})