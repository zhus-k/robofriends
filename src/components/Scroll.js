import React from 'react'

const Scroll = (props) => {
    return (
        <div className='scrollbox' style={{overflowY: 'scroll'}}>
            {props.children}
        </div>
    );
};

export default Scroll;