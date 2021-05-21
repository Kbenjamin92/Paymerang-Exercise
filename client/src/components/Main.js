import React, { useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

const Main = () => {
    const [state, setState] = useState([])

    const getData = async () => {
        try {
            const response = await axios.get('/api')
            const results = await response.data
            setState(results)
            console.log(results)
        }
        catch (err) {console.log(err)}
    }

    const renderData = state.map((item, key) => {
        const renderRemittanceData = item.Remittance.map((data, key) => {
            return (
                <div key={key}>
                    <ul>
                        <li>{data.Amount}</li>
                    </ul>
                </div>
            )
        })
        return (
            <div key={key}>
                <ul>
                    <li>{item.Payee.Name}</li>
                    <li>{item.Payment.PAN}</li>
                    <li>{renderRemittanceData}</li>
                </ul>
            </div>
        )
    })
    return (
        <div>
            <Button onClick={() => getData()}>Data</Button>
            {renderData}
        </div>
    )
}

export default Main
