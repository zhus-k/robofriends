import React from 'react';

const Card = ({ name, email, id, phone, website }) => {
    return (
        <div className='bg-light-yellow br3 pa3 ma2 grow bw2 shadow-5 tc card'>
            <img src={`https://robohash.org/${id}?200x200`} alt="" />
            <div className='br2 shadow-1 infobox overlay'>
                <h2 className='text nameplate'>{ name }</h2>
                <p className='text'>{ email }</p>
                <p className='text'>{ phone }</p>
                <p className='text'>{ website }</p>
            </div>
        </div>
    );
}

export default Card;