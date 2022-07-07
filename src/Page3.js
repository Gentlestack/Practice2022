import './Page3.css';
import './CustomButton.css';
import React from 'react';


class Page3 extends React.Component {
   
    render() {
        return (
            <div className="Page3">
                <header>

                </header>
                <body className="Page3-body">
                    <div>
                        <tr>
                            <td>
                                <button className="custom-btn btn-1" > Planets </button>
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

export default Page3;