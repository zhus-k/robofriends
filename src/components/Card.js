import React, { Component } from 'react';

class Card extends Component {
    constructor(){
        super();
        this.state = {
            isHovered: false,
            timeoutID: 0,
        }
    }

    // Sets a delay before setting isHovered
    onEnter = (event) => {
        this.setState({timeoutID: setTimeout(() => {
            this.setState({isHovered: true});
        }, 1000)})
        
    }

    // Resets a card's isHovered state
    resetCard = (delay) => {
        clearTimeout(this.state.timeoutID);
        this.setState({timeoutID: 0, isHovered: false});
    }

    render(){
        const { name , email, id, phone, website } = this.props;

        return (
            this.state.isHovered
            ?
            <div className='bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5 tc grid-item card' onMouseLeave={ this.resetCard } >
                <div className='br2 shadow-1 infobox'>
                    <h2 className=''>{ name }</h2>
                    <p className=''>{ email }</p>
                    <p className=''>{ phone }</p>
                    <p className=''>{ website }</p>
                </div>
            </div>
            :
            <div className='bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5 tc grid-item card' onMouseEnter={ this.onEnter } onMouseLeave={ this.resetCard }>
                <img src={`https://robohash.org/${id}?200x200`} alt="" />
                <div className='br2 shadow-1 infobox'>
                    <h2 className=''>{ name }</h2>
                    <p className=''>{ email }</p>
                </div>
            </div>
        );
    }
}

export default Card;