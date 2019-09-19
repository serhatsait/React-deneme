import React, {Component} from 'react';

class DecideSport extends Component {
    state = {
        longitude: 0
    };
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                this.setState({
                    longitude: position.coords.longitude
                });
            },
            (err) => {
                console.log(err);
            }
        );
        return (
            <div>
                Decide Sport longitude: {this.state.longitude}
            </div>
        )
    }
}

export default DecideSport;