import './InfoPage.css';
import './CustomButton.css';
import React from 'react';


class FilmPage extends React.Component {

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
                            <p> title: {items.title} </p>
                            <li>episode id: {items.episode_id}</li>
                            <li>opening crawl: {items.opening_crawl}</li>
                            <li>director: {items.director}</li>
                            <li>producer: {items.producer}</li>
                            <li>release date: {items.release_date}</li>
                        </ul>
                    </body>
                </div>
            );
        }
    }
}

export default FilmPage;