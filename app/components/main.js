import React from 'react';
import Saved from './children/saved.js';
import Search from './children/search.js';

var Link = require("react-router").Link;

class Main extends React.Component {
    render () {
        return (
            <div>
                <div className="jumbotron">
                    <h1>New York Times Article Scrubber</h1>
                    <p>Search for and Annotate Articles!</p>
                </div>
                <div className="row">
                    <div className = "col-md-6">
                        <Search />
                    </div>
                </div>
                <div className="row">
                    <div className = "col-md-6">
                        <Saved />
                    </div>
                </div>
            </div>
        )
    }
};

export default Main;