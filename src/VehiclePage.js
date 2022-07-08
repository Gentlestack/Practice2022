import './InfoPage.css';
import './CustomButton.css';
import React from 'react';


class VehiclePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: false,
            isLoaded: false,
            count: 0,
            items: null
        };
    }
    componentDidMount() {
        fetch(this.props.url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result,
                        films: result.films
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }

            )
    }

    render() {
        const { error, isLoaded, items, films } = this.state;

        if (error) {
            return <p> Error {error.message}</p>
        } else if (!isLoaded) {
            return <p> Loading... </p>
        } else {
            return (
                <div className="InfoPage">
                    <header>
                    </header>
                    <body>
                        <ul>
                            <p> name: {items.name} </p>
                            <li>model: {items.model}</li>
                            <li>manufacturer: {items.manufacturer}</li>
                            <li>cost in credits: {items.cost_in_credits}</li>
                            <li>length: {items.length}</li>
                            <li>max atmosphering speed: {items.max_atmosphering_speed}</li>
                            <li>crew: {items.crew}</li>
                            <li>passengers: {items.passengers}</li>
                            <li>cargo capacity: {items.cargo_capacity}</li>
                            <li>consumables: {items.consumables}</li>
                            <li>vehicle class: {items.vehicle_class}</li>
                        </ul>
                    </body>
                </div>
            );
        }
    }
}

export default VehiclePage;