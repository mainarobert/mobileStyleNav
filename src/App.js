import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'

function App() {

  return (
    <>
      <Router>
        <Nav />
        <Routes>
         <Route path='/' /> 
        </Routes>
      </Router>
    </>
  )
}

export default App
