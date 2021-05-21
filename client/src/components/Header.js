import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

const Header = () => {
    return (
        <div style={{margin: "20px 0px 40px 0px"}}>
            <Jumbotron fluid>
                <h1>Paymerang Data</h1>
                <p>
                Click the button below to get the sample payment data.
                </p>
            </Jumbotron>
        </div>
    )
}

export default Header
