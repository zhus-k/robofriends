import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
} from './constants';
import * as actions from './actions';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const nock = require('nock');

const mockStore = configureStore([thunk]);

describe('dispatch actions', () => {
    beforeEach(() => {
        store.clearActions();
    });
    const store = mockStore();

    const robot = {
        id: '123',
        name: 'bot',
        email: 'bot@test.com'
    }

    it('should create action to change search field', () => {
        const text = 'testtesttest'
        const expectedAction = {
            type: CHANGE_SEARCH_FIELD,
            payload: text
        }
        expect(actions.setSearchField(text)).toEqual(expectedAction);
    });

    it('handles requesting robots pending', () => {
        store.dispatch(actions.requestRobots());
        expect(store.getActions()).toEqual([{ type: REQUEST_ROBOTS_PENDING }]);
    });

    // it('handles requesting robots success', () => {
    //     nock('https://jsonplaceholder.typicode.com')
    //         .get('/users')
    //         .reply(200, robot);

    //     store.dispatch(actions.requestRobots());
    //     console.log(store.getActions());
    //     expect(store.getActions()).toEqual({ type: REQUEST_ROBOTS_SUCCESS, robot });
    // })
});