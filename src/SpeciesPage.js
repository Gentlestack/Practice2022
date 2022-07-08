import './InfoPage.css';
import './CustomButton.css';
import React from 'react';


class SpeciesPage extends React.Component {

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
                            <li>classification: {items.classification}</li>
                            <li>designation: {items.designation}</li>
                            <li>average height: {items.average_height}</li>
                            <li>skin colors: {items.skin_colors}</li>
                            <li>hair colors: {items.hair_colors}</li>
                            <li>eye colors: {items.eye_colors}</li>
                            <li>average lifespan: {items.average_lifespan}</li>
                            <li>language: {items.language}</li>
                        </ul>
                    </body>
                </div>
            );
        }
    }
}

export default SpeciesPage;