import React from 'react';

class AddFishForm extends React.Component {
    render() {
        return (
            <div>
                <h2>Add Fish Form</h2>
                <form className='fish-edit'>
                    <input type='text' placeholder='Fish Name'/>
                    <input type='text' placeholder='Fish Price'/>
                    <select>
                        <option type='available'>Fresh</option>
                        <option type='unavailable'>Sold Out!</option>
                    </select>
                    <textarea type='text' placeholder='Fish Desc'></textarea>
                    <input type='text' placeholder='Fish Image'/>
                    <button type='submit'>+ Add Item</button>
                </form>
            </div>
        );
    }
}

export default AddFishForm;