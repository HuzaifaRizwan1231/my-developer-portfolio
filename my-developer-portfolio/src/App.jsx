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
          
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>

          {/* RFC */}
          <Route path="/restaurantMenuApp" element={<ProjectInfo projectTitle="Restaurant Menu App" projectDescription="Hello Worlds" websiteLink="https://restaurant-menu-app-frontend.vercel.app/" githubLink="https://github.com/HuzaifaRizwan1231/RestaurantMenuApp" features={["one feature", "two feature"]} technologies={[{icon:"fa-brands fa-instagram", name: "Instagram"},{}]}/>}/>

        </Routes>
        
        <Footer/>
      </Router>
    </>
  )
}

export default App
