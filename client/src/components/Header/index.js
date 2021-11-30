import React from 'react';
import Button from '../Button'

const Header = ({ loggedIn }) => {
    return(
        <header>
            <h1 className="header-title">To Do-ist</h1>
            <Button loggedIn={loggedIn} />
        </header>
    );
};

export default Header;