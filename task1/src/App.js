import React from 'react'




import   "./App.css"
import  {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbars from './Navbars/Navbars'
import About from './Components/About'
import Home from './Components/Home'
import Tour from './Components/Tour'
import Menu from './CardPage/Menu'

const App = () => {
  return (
<Router>
  <Navbars/>
  <Menu/>
  <Routes>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/tour" element={<Tour/>}/>
  </Routes>
</Router>
  )
}

export default App