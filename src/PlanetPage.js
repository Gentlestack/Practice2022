import './InfoPage.css';
import './CustomButton.css';
import React from 'react';


class PlanetPage extends React.Component {

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
        //fetch(this.films[0])
    }

    secondFetch() {
        const { films } = this.state;
        fetch(films[0])
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        title: result.title
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    handleClick() {

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
                            <li>period: {items.rotation_period}</li>
                            <li>orbital period: {items.orbital_period}</li>
                            <li>diameter: {items.diameter}</li>
                            <li>climate: {items.climate}</li>
                            <li>gravity: {items.gravity}</li>
                            <li>terrain: {items.terrain}</li>
                            <li>surface water: {items.surface_water}</li>
                            <li>population: {items.population}</li>
                        </ul>
                    </body>
                </div>
            );
        }
    }
}

export default PlanetPage;