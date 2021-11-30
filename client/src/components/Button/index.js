import React, { useState } from 'react';

const Button = ({ loggedIn }) => {
    if(!loggedIn) {
        return (
            <>
            </>
        )
    }
    return(
        <button type="button">
            log out.
        </button>
    );
};

export default Button;