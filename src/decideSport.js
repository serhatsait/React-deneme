import React, {Component} from 'react';
import Loader from "./loader";

class DecideSport extends Component {
    state = {
        latitude: 0,
        error: ''
    };

    decideSport(lat) {
        const currentMonth = new Date().getMonth();
        const summer = {
            text: 'Yüzme zamanı',
            iconName: 'sun'
        };
        const winter = {
            text: 'Snowboard\'a gdebilirsin.',
            iconName: 'snowflake'
        };

        if (lat < 0) {
            //Güney yarımküre

            return currentMonth > 3 && currentMonth < 8 ? winter : summer;

        } else {
            //Kuzey yarımküre

            return currentMonth > 8 || currentMonth < 3 ? winter : summer;

        }
    }

    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                this.setState({
                    latitude: position.coords.latitude
                });
            },
            (err) => {
                console.log(err);
                this.setState({
                    error: 'Kullanıcı lokasyon bilgisini paylaşmadı.'
                });
            }
        );

        const {latitude, error} = this.state;

        if (latitude && !error) {
            const sport = this.decideSport(latitude);
            return (
                <div className={`${sport.iconName}-wrapper decide-sport-container`}>
                    <h2 className="ui header">
                        <i className={`${sport.iconName} outline icon`}/>
                        <div className="content">
                            {sport.text}
                        </div>
                    </h2>
                </div>
            );
        } else if (!latitude && error) {
            return (
                <div>
                    Hata: {error}
                </div>
            );
        }

        return (
            <div>
                <Loader text={"Lokasyon bilgisini paylaşınız..."}/>
            </div>
        );
    }
}

export default DecideSport;