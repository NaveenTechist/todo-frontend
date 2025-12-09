import './index.css'

function Create() {
    return (
        <div className='create-container'>
            <form className='create-form'>
                <h1 className="create-text">Create</h1>
                <lable className="create-label" id="title">Title</lable>
                <input className="create-inputs" type='input' id='title' placeholder="Add title" />
                <lable className="create-label" htmlFor="description">Description</lable>
                <input className="create-inputs" type='input' id="description" placeholder="Add description" />
                <button type='submit' className='create-submit-btn'>Submit</button>
            </form>
        </div>
    )
}
export default Create