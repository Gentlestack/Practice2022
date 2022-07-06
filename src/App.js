import './App.css';
import './CustomButton.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Page from './Page2'

const root = ReactDOM.createRoot(document.getElementById('root'));

class App extends React.Component {
    //constructor(props) {
    //    super(props);
    //    this.state = { isClicked: false };
    //    this.handleClick = this.handleClick.bind(this);
    //}
    handleClick = () => {
        root.render(
            <React.StrictMode>
                <Page />
            </React.StrictMode>
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
                                <button className="custom-btn btn-1" onClick={this.handleClick}> Planets </button>
                            </td>
                            <td>
                                <button className="custom-btn btn-1"> Spaceships </button>
                            </td>
                            <td>
                                <button className="custom-btn btn-1"> Vehicles </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className="custom-btn btn-1"> People </button>
                            </td>
                            <td>
                                <button className="custom-btn btn-1"> Films </button>
                            </td>
                            <td>
                                <button className="custom-btn btn-1"> Species </button>
                            </td>
                        </tr>
                    </div>
                </body>
            </div>
        );
    }
}

export default App;
