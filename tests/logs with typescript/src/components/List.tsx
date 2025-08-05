import { useState } from "react"

type Data = {
    name: string,
    age: string,
    address: string
}

type dataProp = {
    data: Data[]
}

export default function List() {
    const [data, setData] = useState<Data[]>([])
    const [name, setName] = useState<string>("")
    const [age, setAge] = useState<string>("")
    const [address, setAddress] = useState<string>("")

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAge(e.target.value)
    }

    const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value)
    }

    const submitData = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newData = {
            name: name,
            age: age,
            address: address
        }
            setData(prev => [...prev, newData]);
            setName("")
            setAge("")
            setAddress("")
    }

    return (
        <div className="">
            <form action="" onSubmit={submitData}>
                <Table data={data} />
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Name</span>
                    <input value={name} onChange={handleName} type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                    <span className="input-group-text" id="basic-addon1">Age</span>
                    <input type="text" value={age} onChange={handleAge} className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                    <span className="input-group-text" id="basic-addon1">Address</span>
                    <input value={address} onChange={handleAddress} type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="btn-group">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

const Table = ({ data }: dataProp) => {
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
                <Data data={data} />
            </tbody>
        </table>
    )
}

const Data = ({ data }: dataProp) => {
    return (
        <>
            {data.map((value, index) => {
                return (
                    <tr key={index}>
                        <td key={index}>{value.name}</td>
                        <td key={index}>{value.age}</td>
                        <td key={index}>{value.address}</td>
                    </tr>
                )
            })}
        </>
    )
}