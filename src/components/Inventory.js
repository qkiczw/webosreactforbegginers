import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase'
import EditFishForm from './EditFishForm';
import AddFishForm from './AddFishForm';
import Login from './Login';

class Inventory extends React.Component {

    static propTypes = {
        fishes: PropTypes.object,
        updateFish: PropTypes.func,
        deleteFish: PropTypes.func,
        loadSampleFishes: PropTypes.func,
        addFish: PropTypes.func
    }
    authHandler = async authData => {
        // 1. Look up the current store in the firebase database
        // 2. Clain it if there is no owner
        // 3. Set the state of the inventory component to reflect the current user
        console.log(authData);
    }

    authenticate = (provider) => {
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        firebase.auth().signInWithPopup(authProvider).then(this.authHandler)
    }

    render() {
        return <Login authenticate={this.authenticate}/>;
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