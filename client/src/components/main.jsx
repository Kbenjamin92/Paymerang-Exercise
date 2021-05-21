import React, { useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Pagination from '../components/pagination.jsx'

const Main = () => {
    const [state, setState] = useState([])
    const [pageSize, setPageSize] = useState(5)

    // Get json data from server
    const getData = async () => {
        try {
            const response = await axios.get('/api')
            const results = await response.data
            setState(results)
            console.log(results)
        }
        catch (err) {console.log(err)}
    }

    const handlePageChange = page => {
        console.log(page)
    }


    // Render json data from state
    const renderData =  state.length ? state.map((item, key) => {
        const renderRemittanceData = item.Remittance.map((data, key) => {
            return (
                <div key={key}>
                    <ul className="list-group list-group" style={{marginBottom: "20px"}}>
                        <li className="list-group-item"><strong>Payor Name:</strong> {data.PayorName}</li>
                        <li className="list-group-item"><strong>Payor ID:</strong> {data.PayorId}</li>
                        <li className="list-group-item"><strong>Description:</strong> {data.Description}</li>
                        <li className="list-group-item"><strong>Amount:</strong> {data.Amount}</li>
                    </ul>
                </div>
            )
        })
        return (
            <div key={key} style={{display: "flex", justifyContent: "space-evenly"}}>
                <div style={{marginBottom: "30px"}}>
                    <h2>Payee</h2>
                    <ul className="list-group list-group">
                        <li className="list-group-item"><strong>Name:</strong> {item.Payee.Name}</li>
                        <li className="list-group-item"><strong>Fax:</strong> {item.Payee.Fax}</li>
                        <li className="list-group-item"><strong>Phone:</strong> {item.Payee.Phone}</li>
                        <li className="list-group-item"><strong>Address:</strong> {item.Payee.Address.Address1}</li>
                        <li className="list-group-item"><strong>City:</strong> {item.Payee.Address.City}</li>
                        <li className="list-group-item"><strong>State Or Province:</strong> {item.Payee.Address.StateOrProvince}</li>
                        <li className="list-group-item"><strong>Country:</strong> {item.Payee.Address.Country}</li>
                        <li className="list-group-item"><strong>Postal Code:</strong> {item.Payee.Address.PostalCode}</li>
                        <li className="list-group-item"><strong>Attention:</strong> {item.Payee.Attention}</li>
                        <li className="list-group-item"><strong>Submission Date:</strong> {item.Payee.SubmissionDate}</li>
                    </ul>
                    <h2 style={{marginTop: "20px"}}>Payment</h2>
                    <ul  className="list-group list-group">
                        <li className="list-group-item"><strong>PAN:</strong> {item.Payment.PAN}</li>
                        <li className="list-group-item"><strong>CVV:</strong> {item.Payment.CVV}</li>
                        <li className="list-group-item"><strong>Exp:</strong> {item.Payment.Exp}</li>
                    </ul>
                    </div>

                    <div className="remittance-data">
                        <h2>Remittance</h2>
                        {renderRemittanceData}
                    </div>
            </div>
        )
    }) : (
        <div style={{textAlign: "center", margin: "35px"}}>
            <h3>No Data Available!</h3>
        </div>
    )
    return (
        <div>
            <Button variant="success" onClick={() => getData()}>Data</Button>
            <Pagination 
                itemsCount={state.length} 
                pageSize={pageSize} 
                onPageChange={() => handlePageChange}
            />
            <div style={{textAlign: "start"}}>
                {renderData}
            </div>
            <Pagination 
                itemsCount={state.length} 
                pageSize={pageSize} 
                onPageChange={handlePageChange}
            />
        </div>
    )
}

export default Main
