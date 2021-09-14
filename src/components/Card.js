import React, { Component } from 'react';

class Card extends Component {
    constructor(){
        super();
        this.state = {
            isHovered: false,
        }
    }

    onHover = (event) => {
        console.log('mouseover');
            let delay = setTimeout(() => {
                this.setState({isHovered: true});
                console.log('triggered');
            }, 1000);
            this.onMouseLeave = () => {
                clearTimeout(delay);
                this.setState({isHovered: false});
                console.log('reset');
            }
    
    }

    resetCard = (event) => {
        console.log('leave');
        this.setState({isHovered: false});
    }

    render(){
        const { name , email, id, phone, website } = this.props;

        return (
            this.state.isHovered ? 
            <div className='bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5 tc grid-item' onMouseOver={ this.onHover } onMouseLeave={ this.resetCard }>
                <img src={`https://robohash.org/${id}?200x200`} alt="" />
                <div className='br2 shadow-1 infobox'>
                    <h2 className=''>{ name }</h2>
                    <p className=''>{ email }</p>
                    <p className=''>{ phone }</p>
                    <p className=''>{ website }</p>
                </div>
            </div>
            :
            <div className='bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5 tc grid-item' onMouseOver={ this.onHover } onMouseLeave={ this.resetCard }>
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