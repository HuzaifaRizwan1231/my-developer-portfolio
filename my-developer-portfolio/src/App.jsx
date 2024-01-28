import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About';
import Home from './pages/Home';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectInfo from './pages/ProjectInfo';

function App() {

  return (
    <>
      <Router>
        <Navbar/>

        <Routes>
          <Route path="/" element={<ProjectInfo/>}/>
          {/* <Route path="/about" element={<About/>}/> */}
        </Routes>
        
        <Footer/>
      </Router>
    </>
  )
}

export default App
