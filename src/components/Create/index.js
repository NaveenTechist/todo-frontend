import './index.css'
import { Component } from 'react'
import { Navigate } from 'react-router-dom'

class Create extends Component {


    state = {
        title: '',
        description: '',
        status: 'Pending'
    }

    submitForm = async (e) => {
        e.preventDefault()
        const { title, description, status } = this.state
        if (title === "" || description === "") return
        const object = {
            title,
            description,
            status,
        }
        console.log(object)
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
        console.log(response)
        if (response.ok) {
            this.setState({ title: '', description: "" })
            return <Navigate to="/" />
        }

    }

    titleInput = (event) => {
        this.setState({ title: event.target.value })
    }

    descriptionInput = (event) => {
        this.setState({ description: event.target.value })
    }

    render() {
        const { title, description } = this.state
        return (
            <div className='create-container'>
                <form className='create-form' onSubmit={this.submitForm}>
                    <h1 className="create-text">Create Todo</h1>
                    <div className='inputs-containers'>
                        <label className="create-label" id="title">Title</label>
                        <input value={title} onChange={this.titleInput} className="create-inputs" type='text' id='title' placeholder="Add title" />
                    </div>
                    <div className='inputs-containers'>
                        <label className="create-label" htmlFor="description">Description</label>
                        <input value={description} onChange={this.descriptionInput} className="create-inputs" type='input' id="description" placeholder="Add description" />
                    </div>
                    <button type='submit' className='create-submit-btn'>Submit</button>
                </form>
            </div>
        )
    }
}
export default Create