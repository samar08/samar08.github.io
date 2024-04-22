import React from 'react'
import Sidebar from './Components/Sidebar'
import './styles/style.css'
import { BrowserRouter,Routes,Route,Link,Outlet , HashRouter} from 'react-router-dom'
import Aboutme from './pages/Aboutme'
import WorkExperience from './pages/WorkExperience'
import Projects from './pages/Projects'
import Publications from './pages/Publications'
import Achievements from './pages/Achievements'
const App = () => {
  return (
    
    <div style={{display:'flex'}} className='row'>
      
      <HashRouter>
      <Sidebar/> 
      
     <div className='container-fluid border col-md-9'>
     
      <Routes>
        <Route path="/" element={<Aboutme/>}></Route>
        <Route path="/myportfolio" element={<Aboutme/>}></Route>
        <Route path="/aboutme" element={<Aboutme/>}></Route>
        <Route path="/workexp" element={<WorkExperience/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/publications" element={<Publications/>}></Route>
        <Route path="/achievements" element={<Achievements/> }></Route>
      </Routes>
     
      </div>
      </HashRouter> 
    </div>
    
  )
}

export default App
