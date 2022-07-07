import './App.css';
import './CustomButton.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Page2 from './Page2'

const root = ReactDOM.createRoot(document.getElementById('root'));

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isClicked: false };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(requiredUrl) {
        var planetPage = new Page2() // todo
        root.render(
             <Page2 url = {requiredUrl}/>
            )
    }
    render() {
        return (
            <div className="App">
                <header>

                </header>
                <body className="App-body">
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

export default App;
