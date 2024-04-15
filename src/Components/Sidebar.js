import React from 'react'
import '../styles/style.css'
import { Avatar ,Button} from 'rsuite'
import image from '../images/profilepic.jpg'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar'>


      <center><Avatar size="xs" src={image} circle/></center>
      
    <div>
    <Link to='/aboutme'><Button appearance="link">About Me</Button></Link><br/>
    <Link to="/workexp"><Button appearance="link">Work Experience</Button></Link><br/>
    <Link to="/projects"><Button appearance="link">Projects</Button></Link><br/>
    <Link to="/publications"><Button appearance="link">Publications</Button></Link><br/>
    <Link to="/achievements"><Button appearance="link">Achievements</Button></Link><br/>
    </div>
    </div>
  )
}

export default Sidebar
