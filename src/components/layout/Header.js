import React from 'react';

function Header() {
    const headerStyle = {
        fontSize: "2.5em",
        textAlign: "center",
        padding: "20px"
    }
    return (
        <header style={headerStyle}>
            <h1>Meme Generator</h1>
        </header>
    )
}

export default Header;
