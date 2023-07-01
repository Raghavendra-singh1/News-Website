import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./Pages/Home";
import Fetch from "./components/Fetch";
import Footer from "./components/Footer";
import FetchTesla from "./components/FetchTesla";
import FetchBusiness from "./components/FetchBusiness";
import FetchTechcrunch from "./components/FetchTechcrunch";
import Fetchl6 from "./components/Fetchl6";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
// import Login from "./Pages/Login";


// import Footer from "./components/Foo?
const App = () => {
  return (
    
    <Router>
     <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route  path="/general" element={<FetchTesla/>}/>
        <Route  path="/bussiness" element={<FetchBusiness/>}/>
        <Route  path="/Entertainment" element={<FetchTechcrunch/>}/>
        <Route  path="/sports" element={<Fetchl6/>}/>

        <Route  path="/signup" element={<Signup/>}/>
        <Route  path="/login" element={<Login/>}/>

        

      </Routes>
      <Footer/>
    </Router>
    

  );

      
};

export default App;
