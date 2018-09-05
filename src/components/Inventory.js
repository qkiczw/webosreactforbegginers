import React from 'react';
import EditFishForm from './EditFishForm'

import AddFishForm from './AddFishForm';
class Inventory extends React.Component {
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