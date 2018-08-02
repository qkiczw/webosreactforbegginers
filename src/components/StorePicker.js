import React from 'react';
import { format } from 'path';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    goToStore(event) {
        event.preventDefault()
        console.log('You change the URL');
        // First grab the text from tex box
        const storeId = this.storeInput.value;
        console.log(`We are going to ${storeId}`);

        // Second we are going to transition from / to /store/:storeId
        this.context.router.transitionTo(`store/${storeId}`);


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
StorePicker.contextTypes = {
    router: React.PropTypes.object
}

export default StorePicker;