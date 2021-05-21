import React, { useState } from 'react'
import "../styles/Main.css"
import axios from 'axios'
import Button from 'react-bootstrap/Button'

const Main = () => {
    const [state, setState] = useState([])

    // Get json data from server
    const getData = async () => {
        try {
            const response = await axios.get('/api')
            const results = await response.data.slice(14)
            setState(results)
            console.log(results)
        }
        catch (err) {console.log(err)}
    }

    // Render json data from state
    const renderData = state.map((item, key) => {
        const renderRemittanceData = item.Remittance.map((data, key) => {
            return (
                <div key={key}>
                    
                    <ul class="list-group list-group-flush" className="remittance-data">
                        <li class="list-group-item"><strong>Payor Name:</strong> {data.PayorName}</li>
                        <li class="list-group-item"><strong>Payor ID:</strong> {data.PayorId}</li>
                        <li class="list-group-item"><strong>Description:</strong> {data.Description}</li>
                        <li class="list-group-item"><strong>Amount:</strong> {data.Amount}</li>
                    </ul>
                </div>
            )
        })
        return (
            <div key={key} className="api-container">
                <div className="data">
                    <h2>Payee</h2>
                    <ul class="list-group list-group">
                        <li class="list-group-item"><strong>Name:</strong> {item.Payee.Name}</li>
                        <li class="list-group-item"><strong>Fax:</strong> {item.Payee.Fax}</li>
                        <li class="list-group-item"><strong>Phone:</strong> {item.Payee.Phone}</li>
                        <li class="list-group-item"><strong>Address:</strong> {item.Payee.Address.Address1}</li>
                        <li class="list-group-item"><strong>City:</strong> {item.Payee.Address.City}</li>
                        <li class="list-group-item"><strong>State Or Province:</strong> {item.Payee.Address.StateOrProvince}</li>
                        <li class="list-group-item"><strong>Country:</strong> {item.Payee.Address.Country}</li>
                        <li class="list-group-item"><strong>Postal Code:</strong> {item.Payee.Address.PostalCode}</li>
                        <li class="list-group-item"><strong>Attention:</strong> {item.Payee.Attention}</li>
                        <li class="list-group-item"><strong>Submission Date:</strong> {item.Payee.SubmissionDate}</li>
                    </ul>
                </div>
                    <div className="data">
                        <h2>Payment</h2>
                        <ul  class="list-group list-group">
                            <li class="list-group-item"><strong>PAN:</strong> {item.Payment.PAN}</li>
                            <li class="list-group-item"><strong>CVV:</strong> {item.Payment.CVV}</li>
                            <li class="list-group-item"><strong>Exp:</strong> {item.Payment.Exp}</li>
                        </ul>
                    </div>
                    <div>
                        {renderRemittanceData}
                    </div>
            </div>
        )
    })
    return (
        <div>
            <Button onClick={() => getData()}>Data</Button>
            <div className="container">
                {renderData}
            </div>

        </div>
    )
}

export default Main
