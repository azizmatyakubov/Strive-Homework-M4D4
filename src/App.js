import "bootstrap/dist/css/bootstrap.min.css";
import  MyNavbar  from "./components/MyNavbar";
import "./App.css";
import Main from "./components/Main";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
    <MyNavbar />
      <Routes>
      
      <Route path="/" element={<Main />} /> 
      <Route path="/register" element={<Register />} /> 
  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
