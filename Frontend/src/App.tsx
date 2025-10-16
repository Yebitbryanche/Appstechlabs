import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./Containers/navigation"
import Internship from "./pages/Internship"
import About from "./pages/About"
import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/internship" element={<Internship/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
