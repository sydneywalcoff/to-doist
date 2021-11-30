import React, { useState } from 'react';

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    return(
        <header>
            <></>
            <h1 className="header-title">To Do-Ist</h1>
            {loggedIn ? () : ()}
        </header>
    );
};

export default Header;