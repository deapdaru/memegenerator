import React from 'react'

function Footer() {
    const footerStyle = {
        textAlign: "center",
        padding: "15px"
    }
    return (
        <footer style={footerStyle}>
            <code>
                Made using React (create-react-app), React Routers (react-route-dom), imgflip API, 
                Material UI (pagination included) and lazy loading<br/>
                By Deap Daru.
            </code>
        </footer>
    )
}

export default Footer;
