import React from 'react'
import '../styles/style.css'
import { Avatar ,Button} from 'rsuite'
import image from '../images/profilepic.jpg'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar col-sm-3'>


      <center><img src={image} className='rounded'/></center>
      
    <div className='sidebarbuttons'>
      <table className='table table-bordered text-center'>
        <tr>
        <td className="border-top-0" style={{padding:'20px'}}><Link to='/aboutme' style={{ textDecoration: 'none' }}>About Me</Link></td>
        </tr>
        <tr>
        <td style={{padding:'20px'}}><Link to="/workexp" style={{ textDecoration: 'none' }}>Work Experience</Link></td>
        </tr>
        <tr>
        <td style={{padding:'20px'}}><Link to="/projects" style={{ textDecoration: 'none' }}>Projects</Link></td>
        </tr>
        <tr>
        <td style={{padding:'20px'}}><Link to="/publications" style={{ textDecoration: 'none' }}>Publications</Link></td>
        </tr>
        <tr>
        <td className="border-bottom-0" style={{padding:'20px'}}><Link to="/achievements" style={{ textDecoration: 'none' }} >Achievements</Link></td>
        </tr>
      </table>
    
    
    
    
    
    </div>
    </div>
  )
}

export default Sidebar
