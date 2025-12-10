import './index.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    // const [status, setStatus] = useState('Pending')
    const navigate = useNavigate()


    const submitForm = async (e) => {
        e.preventDefault()
        if (title === "" || description === "") return
        const object = {
            title,
            description,
            status: 'Pending'
        }
        // console.log(object)
        const url = 'http://localhost:8080/todos'
        const options = {
            method: 'POST',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJieXN2Z2t4cHp5d3Vpa3RxZ3JnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ5OTk0OTMsImV4cCI6MjA4MDU3NTQ5M30.4RNT_mndOKv9ecieks4Ebi-V3urqg_pwEI-PqbK6NaE",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(object)
        }
        const response = await fetch(url, options)
        // console.log(response)
        if (response.ok) {
            setTitle('')
            setDescription('')
            navigate('/')
        }
    }

    const titleInput = (event) => {
        setTitle(event.target.value)
    }

    const descriptionInput = (event) => {
        setDescription(event.target.value)
    }

    return (
        <div className='create-container'>
            <form className='create-form' onSubmit={submitForm}>
                <h1 className="create-text">Create Todo</h1>
                <div className='inputs-containers'>
                    <label className="create-label" id="title">Title</label>
                    <input value={title} onChange={titleInput} className="create-inputs" type='text' id='title' placeholder="Add title" />
                </div>
                <div className='inputs-containers'>
                    <label className="create-label" htmlFor="description">Description</label>
                    <input value={description} onChange={descriptionInput} className="create-inputs" type='text' id="description" placeholder="Add description" />
                </div>
                <button type='submit' className='create-submit-btn'>Add Todo</button>
            </form>
        </div>
    )

}
export default Create