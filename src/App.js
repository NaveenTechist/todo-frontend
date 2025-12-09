import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Create from './components/Create'


function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/create-todo" element={<Create />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
