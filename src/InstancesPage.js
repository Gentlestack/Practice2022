import './InstancesPage.css';
import './CustomButton.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import PlanetPage from './PlanetPage';
import SpaceshipPage from './SpaceshipPage';
import VehiclePage from './VehiclePage';
import PeoplePage from './PeoplePage';
import FilmPage from './FilmPage';
import SpeciesPage from './SpeciesPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

class InstancesPage extends React.Component {

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
                        count: result.count,
                        items: result.results,
                        previous: result.previous,
                        next: result.next
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
    handleClick(requiredUrl) {
        if (requiredUrl.indexOf("planets") != -1) {
            root.render(
                <PlanetPage url={requiredUrl} />
            );
        }
        else if (requiredUrl.indexOf("starships") != -1) {
            root.render(
                <SpaceshipPage url={requiredUrl} />
            );
        }
        else if (requiredUrl.indexOf("vehicles") != -1) {
            root.render(
                <VehiclePage url={requiredUrl} />
            );
        }
        else if (requiredUrl.indexOf("people") != -1) {
            root.render(
                <PeoplePage url={requiredUrl} />
            )
        }
        else if (requiredUrl.indexOf("films") != -1) {
            root.render(
                <FilmPage url={requiredUrl} />
            )
        }
        else if (requiredUrl.indexOf("species") != -1) {
            root.render(
                <SpeciesPage url={requiredUrl} />
            )
        }
    }

    handleNextAndPrev(pageUrl) {
        if (pageUrl == null)
            return;
        fetch(pageUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        count: result.count,
                        items: result.results,
                        previous: result.previous,
                        next: result.next
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
        const { error, isLoaded, count, items, previous, next } = this.state;
        if (error) {
            return <p> Error {error.message}</p>
        } else if (!isLoaded) {
            return <p> Loading... </p>
        } else {
            return (
                <div className="InstancesPage">
                    <header>
                    </header>
                    <body>
                        <div>
                            <p> Count = {count} </p>
                            <div className="InstancesPage-body">
                                {items.map((item) =>
                                    <tr >
                                        <button className="custom-btn btn-1" onClick={this.handleClick.bind(this, item.url)}> {item.name} {item.title} </button>
                                    </tr>)
                                }
                            </div>
                        </div>
                        <tr>
                            <button className="custom-btn btn-1" onClick={this.handleNextAndPrev.bind(this, previous)}> &lt;- </button>
                            <button className="custom-btn btn-1" onClick={this.handleNextAndPrev.bind(this, next)}> -&gt; </button>
                        </tr>
                    </body>
                </div>
            );
        }
    }
}

export default InstancesPage;