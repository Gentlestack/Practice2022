import './Page3.css';
import './CustomButton.css';
import React from 'react';


class Page3 extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            isLoaded: false,
            count: 0,
            items: []
        };
    }
    componentDidMount() {
        fetch(this.props.url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    render() {
        const { error, isLoaded, items} = this.state;
        if (error) {
            return <p> Error {error.message}</p>
        } else if (!isLoaded) {
            return <p> Loading... </p>
        } else {
            return (
                <div className="Page3">
                    <header>
                    </header>
                    <body>
                        <ul>
                            <li>name: {items.name}</li>
                            <li>period: {items.rotation_period}</li>
                            <li>orbital period: {items.orbital_period}</li>
                            <li>diameter: {items.diameter}</li>
                            <li>climate: {items.climate}</li>
                            <li>gravity: {items.gravity}</li>
                            <li>terrain: {items.terrain}</li>
                            <li>surface water:{items.surface_water}</li>
                            <li>population: {items.population}</li>
                        </ul>
                    </body>
                </div>
            );
        }
    }
}

export default Page3;