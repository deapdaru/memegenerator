import React from 'react';

function Header() {
    const headerStyle = {
        fontSize: "2em",
        textAlign: "center",
        padding: "40px",
        marginBottom: "24px",
        backgroundColor: "#c51162",
        color: "#fff"
    }
    return (
        <header style={headerStyle}>
            <h1>Meme Generator</h1>
        </header>
    )
}

export default Header;
