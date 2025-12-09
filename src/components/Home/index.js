import { Component } from "react"
import './index.css'
import { MdOutlineAddTask } from "react-icons/md";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import Display from '../Display'
import { Link } from "react-router-dom";

class Home extends Component {

    state = {
        data: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        const url = "http://localhost:8080/todos"
        const options = {
            method: "GET",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJieXN2Z2t4cHp5d3Vpa3RxZ3JnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ5OTk0OTMsImV4cCI6MjA4MDU3NTQ5M30.4RNT_mndOKv9ecieks4Ebi-V3urqg_pwEI-PqbK6NaE",
                "Content-Type": "application/json"
            }
        }
        const response = await fetch(url, options)
        if (response.ok) {
            const data = await response.json()
            this.setState({ data: data })
        }
    }
    render() {
        const { data } = this.state
        return (
            <div className="App">
                <div className="main-container">
                    <div className="header-section">
                        <div>
                            <PiDotsThreeOutlineFill color='white' className='icons-sty' />
                        </div>
                        <div>
                            <img className='profile-img' src="https://imgs.search.brave.com/lNovF1PyKezQ5d3P-Zik_LYEuzUqDNT0BuosNYSII5U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtY3NlLmNhbnZh/LmNvbS9ibG9iLzIy/Mzk5ODgvMTYwMHct/RVc0Y2dnWGtnYmMu/anBn" alt="profile" />
                        </div>
                        <Link to='/create-todo'>
                            <button type='button' className="hidden-btn"><MdOutlineAddTask color='white' className='icons-sty' /></button>
                        </Link>

                    </div>
                    <div className='dates-conatiner'>
                        <div className='each-dates-conatiner'>
                            <h1 className='date-text'>07</h1>
                            <h2 className='month-text'>Dec</h2>
                        </div>
                        <div className='each-dates-conatiner'>
                            <h1 className='date-text'>08</h1>
                            <h2 className='month-text'>Dec</h2>
                        </div>
                        <div className='each-dates-conatiner'>
                            <h1 className='date-text'>09</h1>
                            <h2 className='month-text'>Dec</h2>
                        </div>
                        <div className='each-dates-conatiner'>
                            <h1 className='date-text'>10</h1>
                            <h2 className='month-text'>Dec</h2>
                        </div>
                    </div>
                    <div className='body-container'>
                        <div className='body'>
                            <h1 className='body-text'>Today's task</h1>
                            <div>
                                <Display data={data} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home