import './Page2.css';
import './CustomButton.css';
import React from 'react';
import Page3 from './Page3'
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));

class Page2 extends React.Component {

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
                        items: result.results
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
    handleClick(index) 
    {
        var requiredUrl = this.props.url + index + "/"
        root.render(
            <body>
                <Page3 url={requiredUrl}/>
            </body>
        )
    }
    
    render() {
        const { error, isLoaded, count, items } = this.state;
        if (error) {
            return <p> Error {error.message}</p>
        } else if (!isLoaded) {
            return <p> Loading... </p>
        } else {
            return (
                <div className="Page2">
                    <header>
                    </header>
                    <body>
                        <div>
                            <p> Count = {count} </p>
                            <div className="Page2-body">
                                {items.map((item, index) =>
                                    <tr >
                                        <button className="custom-btn btn-1" onClick={this.handleClick.bind(this, index+1)}> {item.name} </button>
                                    </tr>)
                                }
                            </div>
                        </div>
                    </body>
                </div>
            );
        }
    }
}

export default Page2;