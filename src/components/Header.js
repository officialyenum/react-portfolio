import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
    const { Component } = props;
    const style = {
        display: 'inline-block',
        margin: 10,
        marginBottom: 30
    }
    return (
        <div>
            <div>
                <h3 style={style} className="navbar-brand"><Link to="/">Home</Link></h3>
                <h3 style={style} className="navbar-brand"><Link to="/jokes">Jokes</Link></h3>
                <h3 style={style} className="navbar-brand"><Link to="/music-master">Music Master</Link></h3>
            </div>
            <Component/>
        </div>
    )
}

export default Header;