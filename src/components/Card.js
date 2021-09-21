import React from 'react';

const Card = ({ name, email, id, phone, website }) => {
    return (
        <div className='bg-light-yellow br1 pa3 ma2 grow bw2 shadow-5 tc card'>
            <img src={`https://robohash.org/${id}?size=200x200`} alt="" />
            <div className='br1 shadow-1 infobox overlay'>
                <h2 className='text nameplate'>{ name }</h2>
                <p className='text m'>{ email }</p>
                <p className='text m'>{ phone }</p>
                <p className='text m'>{ website }</p>
            </div>
        </div>
    );
}

export default Card;