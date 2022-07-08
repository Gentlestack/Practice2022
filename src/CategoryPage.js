import './CategoryPage.css';
import './CustomButton.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import InstancesPage from './InstancesPage'

const root = ReactDOM.createRoot(document.getElementById('root'));

class CategoryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isClicked: false };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(requiredUrl) {
        root.render(
            <InstancesPage url = {requiredUrl}/>
            )
    }
    render() {
        return (
            <div className="CategoryPage">
                <header>

                </header>
                <body className="CategoryPage-body">
                    <div>
                        <tr>
                            <td>
                                <button className="custom-btn btn-1" onClick={this.handleClick.bind(this, "https://swapi.dev/api/planets/")} > Planets </button>
                            </td>
                            <td>
                                <button className="custom-btn btn-1" onClick={this.handleClick.bind(this, "https://swapi.dev/api/starships/")}> Spaceships </button>
                            </td>
                            <td>
                                <button className="custom-btn btn-1" onClick={this.handleClick.bind(this, "https://swapi.dev/api/vehicles/")}> Vehicles </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className="custom-btn btn-1" onClick={this.handleClick.bind(this, "https://swapi.dev/api/people/")}> People </button>
                            </td>
                            <td>
                                <button className="custom-btn btn-1" onClick={this.handleClick.bind(this, "https://swapi.dev/api/films/")}> Films </button>
                            </td>
                            <td>
                                <button className="custom-btn btn-1" onClick={this.handleClick.bind(this, "https://swapi.dev/api/species/")}> Species </button>
                            </td>
                        </tr>
                    </div>
                </body>
            </div>
        );
    }
}

export default CategoryPage;
