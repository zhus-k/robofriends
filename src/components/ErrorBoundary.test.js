import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from './ErrorBoundary';
import CardList from './CardList';

const wrapper = shallow(<ErrorBoundary><CardList/></ErrorBoundary>);

it('expect to render ErrorBoundary component without error', () => {
    expect(wrapper.state()).toEqual({ hasError: false });
})

const error = new Error('This is an Error.');

it('expect error on rendering ErrorBoundary child component', () => {
    wrapper.find(CardList).simulateError(error);
    expect(wrapper.state()).toEqual({ hasError: true });
})