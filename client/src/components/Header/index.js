import React, { useState } from 'react';

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    const logOutButtonHandler = () => {
        if(loggedIn) {
            return (
                <>
                button
                </>
            );
        }
    };

    return(
        <header>
            <></>
            <h1 className="header-title">To Do-Ist</h1>
            {logOutButtonHandler}
        </header>
    );
};

export default Header;