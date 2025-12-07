import './App.css';
import { MdOutlineAddTask } from "react-icons/md";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

const App = () => {

  state = {
    data: []
  }

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
    console.log(response)
    if (response.ok) {
      const data = response.data
      console.log(data)
    }
  }
  render() {
    const { data } = this.state
    return (
      <div className="App">
        <div className="main-container">
          <div className="header-section">
            <div>
              <MdOutlineAddTask color='white' className='icons-sty' />
            </div>
            <div>
              <img className='profile-img' src="https://imgs.search.brave.com/lNovF1PyKezQ5d3P-Zik_LYEuzUqDNT0BuosNYSII5U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtY3NlLmNhbnZh/LmNvbS9ibG9iLzIy/Mzk5ODgvMTYwMHct/RVc0Y2dnWGtnYmMu/anBn" alt="profile" />
            </div>
            <div>
              <PiDotsThreeOutlineFill color='white' className='icons-sty' />
            </div>
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
                {getData()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
