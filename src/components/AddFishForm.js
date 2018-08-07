import React from 'react';

class AddFishForm extends React.Component {
    createFish(event) {
        event.preventDefault();
        console.log('Gonna make some fish!!!');
        const fish = {
            name: this.name.value,
            price: this.price.value,
            status: this.status.value,
            desc: this.desc.value,
            image: this.image.value
            }
            console.table(fish)
            this.props.addFish(fish);
            this.fishform.reset();
    }

    render() {
        return (
            <div>
                <h2>Add Fish Form</h2>
                <form ref={(input) => this.fishform = input} className='fish-edit' onSubmit={(e) => this.createFish(e)}>
                    <input ref={(input) => this.name = input} type='text' placeholder='Fish Name'/>
                    <input ref={(input) => this.price = input} type='text' placeholder='Fish Price'/>
                    <select ref={(input) => this.status = input} >
                        <option type='available'>Fresh</option>
                        <option type='unavailable'>Sold Out!</option>
                    </select>
                    <textarea ref={(input) => this.desc = input} type='text' placeholder='Fish Desc'></textarea>
                    <input ref={(input) => this.image = input} type='text' placeholder='Fish Image'/>
                    <button type='submit'>+ Add Item</button>
                </form>
            </div>
        );
    }
}


export default AddFishForm;