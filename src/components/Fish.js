import React from 'react';
import {formatPrice} from '../helpers';

class Fish extends React.Component {
    render() {
        const {image, name, price, desc, status} = this.props.details; // destructuring ES6
        return (
            <div className='menu-fish'>
                <li>
                    <img src={image}></img>
                    <h3 className='fish-name'>
                        {name}
                        <span className='price'>{formatPrice(price)}</span>
                    </h3>
                    <p>{desc}</p>
                    <button>Add to Cart</button>
                </li>
            </div>
        )
    }
}

export default Fish;