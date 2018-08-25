import React from 'react';
import {formatPrice} from '../helpers';

class Fish extends React.Component {
    handleClick = () => {
        this.props.addToOrder(this.props.index)
    }
    render() {
        const {image, name, price, desc, status} = this.props.details; // destructuring ES6
        const isAvailable = status === 'available';

        return (
            <div className='menu-fish'>
                <li>
                    <img src={image}></img>
                    <h3 className='fish-name'>
                        {name}
                        <span className='price'>{formatPrice(price)}</span>
                    </h3>
                    <p>{desc}</p>
                    <button onClick={this.handleClick} disabled={!isAvailable}>{isAvailable ? 'Add to Order' : 'Sold Out!'}</button>
                </li>
            </div>
        )
    }
}

export default Fish;