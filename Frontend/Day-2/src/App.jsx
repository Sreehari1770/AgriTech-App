import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import NavBar from "./component/NavBar"
// import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage" 

function App() {

  return (
    <Router>
      <NavBar/>
      <br/>
      <br/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          {/* <Route path="/register" element={<RegisterPage/>}/> */}
        </Routes>
    </Router>
  )
}

export default App
