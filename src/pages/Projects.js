import React from 'react'
import getbikeimage from '../images/getbikeimage.gif'
import reimbursementimage from '../images/reimbursementportalimage.gif';
import chatappimage from '../images/chatappimage.gif';
const Projects = () => {
  return (
  
    <div id="projects" className="carousel slide" data-bs-ride="carousel">
    
      
          {/* <div className="carousel-indicators" style={{marginTop:"100px"}}>
            <button className='bg-dark' type="button" data-bs-target="#projects" data-bs-slide-to="0" className="active"></button>
            <button className='bg-dark' type="button" data-bs-target="#projects" data-bs-slide-to="1"></button>
            <button className='bg-dark' type="button" data-bs-target="#projects" data-bs-slide-to="2"></button>
          </div> */}
      
      
      <center><div className="carousel-inner" style={{marginTop:'36px'}}>
      <div className="carousel-item active">
      <div className='card' style={{width:'50%'}}>
         <center><img src={chatappimage} alt="chat app" className="d-block" style={{width:'100%', height:"500px"}}/> </center>
         <div className='card-body border'>
            <h4 className='card-title'> CHAT APP</h4>
            <p className='card-text'>This is a web application built using React.js and Firebase where users can create chat rooms and chat with others.</p>
            <a href="https://github.com/samar08/chat-app" target="_blank" class="btn btn-primary">View project</a>
           </div>
         </div>
        </div>
        <div className="carousel-item">
        <div className='card' style={{width:'50%'}}>
        <center><img src={reimbursementimage} alt="reimbursement portal" className="d-block" style={{width:'100%',height:"500px"}}/> </center>
        <div className='card-body border'>
            <h4 className='card-title'> REIMBURSEMENT PORTAL</h4>
            <p className='card-text'>This is a web application built for government officials for tracking the orders made by them and granting the reimbursement for the valid requests. This application was built using HTML, CSS, JavaScript, SQL and PHP.  </p>
            <a href="https://github.com/samar08/reimbursement_portal" target="_blank" class="btn btn-primary">View project</a>
           </div>
         </div>
        </div>
        <div className="carousel-item">
           <div className='card' style={{width:'50%'}}>
           <center><img src={getbikeimage} alt="Get Bike" className="d-block" style={{width:'100%',height:"500px"}}/></center>
           <div className='card-body border'>
            <h4 className='card-title'> GET BIKE</h4>
            <p className='card-text'>This is an android app where the users who have a bicycle can sell, or rent them for a period of time.</p>
            <a href="https://github.com/samar08/Get-Bike-Bicycle-lending-system" target="_blank" class="btn btn-primary">View project</a>
           </div>
           </div>
           
        </div>
        
       
      </div></center>
      
   
      <button className="carousel-control-prev" type="button" data-bs-target="#projects" data-bs-slide="prev">
        <span className="carousel-control-prev-icon bg-dark"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#projects" data-bs-slide="next">
        <span className="carousel-control-next-icon bg-dark"></span>
      </button>
    </div>
  )
}

export default Projects
