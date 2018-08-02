import React from 'react';
import { format } from 'path';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    goToStore(event) {
        event.preventDefault()
        console.log('You change the URL');
        // First grab the text from tex box
        console.log(this.storeInput.value);
        // Second we are going to transition from / to /store/:storeId

    }

    render() {
        return (
            <form className='store-selector' onSubmit={(e) => this.goToStore(e)}>
                <h2>Please enter the store</h2>
                <input type='text' required placeholder='store name' defaultValue={getFunName()} 
                        ref={(input) => {this.storeInput = input}}/>
                <button type='submit'>Visit store</button>
            </form>
            
        );
    }
} 

export default StorePicker;