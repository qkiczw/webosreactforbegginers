import React from 'react';
import PropTypes from 'prop-types';
import EditFishForm from './EditFishForm';

import AddFishForm from './AddFishForm';
class Inventory extends React.Component {
    static propTypes = {
        fishes: PropTypes.object,
        updateFish: PropTypes.func,
        deleteFish: PropTypes.func,
        loadSampleFishes: PropTypes.func,
        addFish: PropTypes.func
    }
    render() {
        return (
            <div className='invetory'>
                <h2>Inventory!!!</h2>
                {Object.keys(this.props.fishes).map( key => <EditFishForm 
                key={key} 
                index={key}
                fish={this.props.fishes[key]} 
                updateFish={this.props.updateFish}
                deleteFish={this.props.deleteFish}
                />)}
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.loadSampleFishes}>Load sample fishes</button>
            </div>
        )
    }
}

export default Inventory;