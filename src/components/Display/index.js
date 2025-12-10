import './index.css'
// import { AiFillDelete } from "react-icons/ai";
// import { MdDelete } from "react-icons/md";
// import { RiDeleteBin7Fill } from "react-icons/ri";
import { useState, useEffect } from 'react';


function Display(props) {

    const [data, setData] = useState([])

    const statusFunction = async (e) => {
        const id = e.target.id
        const updatedArray = data.find(each => Number(each.id) === Number(id))
        console.log(updatedArray)

        const updatedItem = {
            ...updatedArray,
            status: updatedArray.status === 'Pending' ? 'Completed' : "Pending"
        }

        console.log(updatedItem)
        const url = `http://localhost:8080/todos/${id}`
        const options = {
            method: 'PUT',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJieXN2Z2t4cHp5d3Vpa3RxZ3JnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ5OTk0OTMsImV4cCI6MjA4MDU3NTQ5M30.4RNT_mndOKv9ecieks4Ebi-V3urqg_pwEI-PqbK6NaE",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedItem)
        }
        const response = await fetch(url, options)
        console.log(response)
    }

    const deleteBtn = async (e) => {
        const url = `http://localhost:8080/todos/${e}`
        const options = {
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJieXN2Z2t4cHp5d3Vpa3RxZ3JnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ5OTk0OTMsImV4cCI6MjA4MDU3NTQ5M30.4RNT_mndOKv9ecieks4Ebi-V3urqg_pwEI-PqbK6NaE",
                "Content-Type": "application/json"
            },
        }
        const response = await fetch(url, options)
        console.log(response)   
    }

    useEffect(() => {
        setData(props.data)
    }, [props.data])

    return (
        <div className='display-container'>
            <div className='all-arrived-data'>
                {data.map((each) => (
                    <div key={each.id} className="display-data">
                        <div className='display-data-left-sec'>
                            <div className='input-container'>
                                <input type='checkbox' onChange={(e) => statusFunction(e)} checked={each.status === 'Completed'} className='display-checkbox' id={each.id} />
                            </div>
                            <label htmlFor={each.id}>
                                <h1 className='display-title'>{each.title}</h1>
                                <p className='description'>{each.description}</p>
                            </label>
                        </div>
                        <div>
                            <button type='button' onClick={() => deleteBtn(each.id)} className='delete-icon-btn'>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Display