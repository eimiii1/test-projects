import { useState } from "react";

export default function Log() {
    const [data, setData] = useState([])
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [address, setAddress] = useState("")

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleAge = (e) => {
        setAge(e.target.value)
    }

    const handleAddress = (e) => {
        setAddress(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault()
        const newData = {
            name: name,
            age: age,
            address: address
        }
        setData(prev => {
            return (
                [...prev, newData]
            )
        })
        
        setName("")
        setAge("")
        setAddress("")
    }

    return (
        <form onSubmit={submit}>
            <div className="d-flex flex-column gap-2 justify-content-center">
                <Table getData={data} />
                <div class="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">Name</span>
                    <input value={name} onChange={handleName} type="text" className="form-control me-3" aria-label="Username" aria-describedby="addon-wrapping" />
                    <span className="input-group-text" id="addon-wrapping">Age</span>
                    <input value={age} onChange={handleAge} type="text" className="form-control me-3" aria-label="Username" aria-describedby="addon-wrapping" />
                    <span className="input-group-text" id="addon-wrapping">Address</span>
                    <input value={address} onChange={handleAddress} type="text" className="form-control me-3" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
                <button type="submit" style={
                    {
                        fontWeight: "bolder"
                    }
                } className="btn btn-primary">SUBMIT</button>
            </div>
        </form>
    )
}

function Table({ getData }) {
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                <Data handleData={getData} />
            </tbody>
        </table>
    )
}

function Data({ handleData }) {
    return (
        handleData.map((data, index) => {
            return <tr key={index}>
                <td key={index}>{data.name}</td>
                <td key={index}>{data.age}</td>
                <td key={index}>{data.address}</td>
            </tr>
        })
    )
}