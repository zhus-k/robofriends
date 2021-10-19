import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
} from './constants';

export const setSearchField = text => (
    {
        type: CHANGE_SEARCH_FIELD,
        payload: text,
    }
);

export const requestRobots = () => async dispatch => {
    dispatch(requestRobotsPending());

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        dispatch(requestRobotsSuccess(data));
    } catch (err) {
        dispatch(requestRobotsFailed(err));
    }
}

export const requestRobotsPending = () => {
    return {
        type: REQUEST_ROBOTS_PENDING
    }
}

export const requestRobotsSuccess = (data) => {
    return {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: data
    }
}

export const requestRobotsFailed = (err) => {
    return {
        type: REQUEST_ROBOTS_FAILED,
        payload: err
    }
}