import './index.css'
// import { AiFillDelete } from "react-icons/ai";
// import { MdDelete } from "react-icons/md";
// import { RiDeleteBin7Fill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";


function Display(props) {
    return (
        <div className='display-container'>
            <div className='all-arrived-data'>
                {props.data.map((each) => (
                    <div key={each.id} className="display-data">
                        <div className='input-container'>
                            <input type='checkbox' checked={each.status === 'Completed'} className='display-checkbox' id={each.id} />
                        </div>
                        <label htmlFor={each.id}>
                            <h1 className='display-title'>{each.title}</h1>
                            <p className='description'>{each.description}</p>
                        </label>
                        <FaTrash color='red' />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Display