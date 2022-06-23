import React from "react";

const Navigation = ({ onRouteChange }) => { 
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('logout')}className='f3 link dim black pa3 pointer'>Logout</p>
        </nav>
    );
}

export default Navigation;