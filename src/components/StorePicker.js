import React from 'react';
import {getFunName} from '../helpers'

class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = (event) => {
        event.preventDefault()
        console.log(this.myInput.value.value);
        // 2. get the text from that input
        const storeName = this.myInput.value.value;
        // 3. Change the page to /store/whatever-they-entered
        this.props.history.push(`/store/${storeName}`)
    }

    render() {
        return (
            <React.Fragment>
                <form className='store-selector' onSubmit={this.goToStore}>
                    <h2>Please Enter A Store</h2>
                    <input 
                        type='text' 
                        ref={this.myInput}
                        required placeholder='Store Name' 
                        defaultValue={getFunName()}
                    />
                    <button type='submit'>Visit Store </button>
                </form>
            </React.Fragment>
        )
    }
}

export default StorePicker;