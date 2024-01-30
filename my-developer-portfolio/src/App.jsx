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
          <Route path="/restaurantMenuApp" element={<ProjectInfo projectTitle="Restaurant Menu App" projectDescription="A delightful restaurant menu app that offers a variety of deals, desi, and fast food options. Explore our menu and enjoy a seamless ordering experience!" websiteLink="https://restaurant-menu-app-frontend.vercel.app/" githubLink="https://github.com/HuzaifaRizwan1231/RestaurantMenuApp" features={[{name:"Login/SignUp:",description:"Create an account or log in to access personalized features."}, {name:"Order Items:",description:"Easily select and order your favorite dishes from our menu."},{name:"Order History:",description:"View your order history for quick reordering."},{name:"Feedback:",description:"Share your thoughts and suggestions with us through the feedback feature."},{name:"About Us:",description:"Learn more about our restaurant, its history, and mission."},{name:"Contact Us:",description:"Reach out to us for any inquiries or assistance."}]} technologies={[{icon:"fa-brands fa-react", name: "React+Vite"},{icon:"fa-solid fa-database", name: "SQL"},{icon:"fa-brands fa-bootstrap", name: "Bootstrap"},{icon:"fa-brands fa-css3", name: "Tailwind CSS"},{icon:"", name: "Express"},{icon:"fa-brands fa-node", name: "Node"}]} projectNameForImage="rfc"/>}/>

          {/* Add your project info item here */}

        </Routes>
        
        <Footer/>
      </Router>
    </>
  )
}

export default App
