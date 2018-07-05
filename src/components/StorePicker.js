import React from 'react';
import { format } from 'path';

class StorePicker extends React.Component {
    render() {
        return (
            <form className='store-selector'>
                <h2>Please enter the store</h2>
                <input type='text' required placeholder='store name' />
                <button type='submit'>Visit store</button>
            </form>
            
        );
    }
}

export default StorePicker;