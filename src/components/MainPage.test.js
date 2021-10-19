import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }

    wrapper = shallow(<MainPage {...mockProps} />);
});

it('expect App to render', () => {
    expect(wrapper).toMatchSnapshot();
});

it('expect pending', () => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: true
    }
    const wrapper = shallow(<MainPage {...mockProps} />)
    expect(wrapper.props()).toMatchSnapshot();
})

it('filters robots correctly', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3000,
            name: 'john',
            email: 'jd@email.com'
        }],
        searchField: 'john',
        isPending: false
    }
    const wrapper2 = shallow(<MainPage {...mockProps2} />);

    expect(wrapper2.instance().filteredRobots()).toEqual([
        {
            id: 3000,
            name: 'john',
            email: 'jd@email.com'
        }
    ]);
});

it('filters robots correctly 2', () => {
    const mockProps3 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3000,
            name: 'john',
            email: 'jd@email.com'
        }],
        searchField: 'a',
        isPending: false
    }

    const filteredRobots = [];
    const wrapper3 = shallow(<MainPage {...mockProps3} />);

    expect(wrapper3.instance().filteredRobots()).toEqual(filteredRobots);
});