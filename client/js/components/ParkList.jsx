import React from 'react';


export default class ParkList extends React.Component {
    constructor(props) {
        super(props);
    }

    selectPark(park) {
        this.props.onSelectPark(park);
    }

    render() {
        var parkList = this.props.parks.map((park) => {
            return (
                <div className='row' onClick={() => this.selectPark(park)} key={park.park_id}>
                    <div className='name ten columns'>{park.name}</div>
                    <div className='id two columns'>{park.park_id}</div>
                </div>
            );
        });
        return (
            <div>
                <div className='row'>
                    <select>
                        <option disabled selected>Neighborhood</option>
                        <option>Downtown</option>
                        <option>Hyde Park</option>
                    </select>
                    <select>
                        <option disabled selected>Activity</option>
                        <option>BBQ Pit</option>
                        <option>Restroom</option>
                    </select>
                    <input type='text' placeholder='Name' />
                </div>
                {parkList}
            </div>
        );
    }
}

ParkList.propTypes = {
    parks:  React.PropTypes.array.isRequired,
    onSelectPark:  React.PropTypes.func.isRequired,
};
