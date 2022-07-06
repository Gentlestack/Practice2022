import './Page2.css';
import './CustomButton.css';
import React from 'react';
import ReactDOM from 'react-dom/client';


function Page() {
    return (
        <div className="Page2">
            <header>

            </header>
            <body className="Page2-body">
                <div>
                    <tr>
                        <button className="custom-btn btn-1"> Planets </button>
                    </tr>
                    <tr>
                        <button className="custom-btn btn-1"> Spaceships </button>
                    </tr>
                    <tr>
                        <button className="custom-btn btn-1"> Vehicles </button>
                    </tr>
                </div>
            </body>
        </div>
    );
}

export default Page;