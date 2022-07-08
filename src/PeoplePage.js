import './InfoPage.css';
import './CustomButton.css';
import React from 'react';


class PeoplePage extends React.Component {

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
                            <li>height: {items.height}</li>
                            <li>mass: {items.mass}</li>
                            <li>hair color: {items.hair_color}</li>
                            <li>skin color: {items.skin_color}</li>
                            <li>eye color: {items.eye_color}</li>
                            <li>birth year: {items.birth_year}</li>
                            <li>gender: {items.gender}</li>
                        </ul>
                    </body>
                </div>
            );
        }
    }
}

export default PeoplePage;