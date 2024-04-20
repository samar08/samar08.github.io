import React from 'react'
import hpelogo from '../images/hpelogo.gif';
import flutterapplogo from '../images/flutterappimage.jpeg'
import applogo from '../images/app.jpeg'
const WorkExperience = () => {
  return (
    
    <div id="workexp" className="carousel slide" data-bs-ride="carousel">
    
      
          {/* <div className="carousel-indicators" style={{marginTop:"100px"}}>
            <button className='bg-dark' type="button" data-bs-target="#workexp" data-bs-slide-to="0" className="active"></button>
            <button className='bg-dark' type="button" data-bs-target="#workexp" data-bs-slide-to="1"></button>
            <button className='bg-dark' type="button" data-bs-target="#workexp" data-bs-slide-to="2"></button>
          </div> */}
      
      
      <center><div className="carousel-inner " style={{marginTop:'36px'}}>
      <div className="carousel-item active">
      <div className='card' style={{width:'60%'}}>
         <center><img src={hpelogo} alt="HPE logo" className="d-block" style={{width:'100%', height:"400px"}}/> </center>
         <div className='card-body border'>
            <h4 className='card-title'> Cloud developer-1 at HPE</h4><h6>(Aug 2021 - Aug 2023)</h6>
            <p className='card-text'>I have worked as a Cloud developer-1 for two years at HPE. I have worked in the team that deploys three-node and single-node clusters with services used for collecting metrics related to the usage of private cloud services that our customers consume. 
            During my time at HPE I have developed web applications that help the partner teams 
            to update the components of our cluster. Also I have developed backup and 
            restore scripts to take backup of components of our cluster like K3S, OS, 
            Squidproxy etc. onto AWS S3 buckets and restore them when required. 
            <b>Tech stack:</b> python, grommet, redux, html5, css3, javascript, django, sqlite,
            AWS S3 buckets, shell</p>
            
           
           </div>
         </div>
        </div>
        <div className="carousel-item">
           <div className='card' style={{width:'60%'}}>
           <center><img src={hpelogo} alt="HPE logo" className="d-block" style={{width:'100%',height:"400px"}}/></center>
           <div className='card-body border'>
            <h4 className='card-title'>Research and development intern at HPE</h4>
            <h6>(Feb 2021 - Aug 2021)</h6>
            <p className='card-text'>Worked on scripts to create Jira entries for newly found support cases and populate Jira fields with data processed from them. Also developed a tool which synchronizes the Jira data with values from Customer Found Issues Database for all the projects.
            <b>Tech stack:</b> python, tkinter, mssql
            </p>
           
           </div>
           </div>
           
        </div>

        <div className="carousel-item">
        <div className='card' style={{width:'60%'}}>
        <center><img src={flutterapplogo} alt="Flutter Logo" className="d-block" style={{width:'100%',height:"400px"}}/> </center>
        <div className='card-body border'>
            <h4 className='card-title'> Flutter app development intern at Airports Authority of India</h4>
            <h6>(Oct 2020 - Dec 2020)</h6>
            <p className='card-text'>Developed a mobile app for the ATS stations present all over India. Through this app the Unit InCharge(UIC) present in each station can update the health status of critical CNS/ATM systems to the Regional heads.
            <b>Tech stack:</b> Flutter, Firebase
            </p>
            
           </div>
         </div>
        </div>
        <div className="carousel-item">
           <div className='card' style={{width:'60%'}}>
           <center><img src={applogo} alt="App logo" className="d-block" style={{width:'80%',height:"461px"}}/></center>
           <div className='card-body border'>
            <h4 className='card-title'>Android app development intern at Airports Authority of India</h4>
            <h6>(May 2019 - June 2019)</h6>
            <p className='card-text'>Developed an Android application called 'HIAL ILS Toolkit'. This app is very much useful for ATSEP engineers at ATS station to perform flight calibration in a very efficient and accurate manner. <b>Achievements-</b> Received certificate of appreciation from the General Manager at HIAL for my work.
            <b>Tech stack: </b> Java (Android)
            </p>
            <a href="https://play.google.com/store/apps/details?id=com.hial.samar.ilstoolkit" target="_blank" class="btn btn-primary">View on play store</a>
           </div>
           </div>
           
        </div>
        
       
      </div></center>
      
   
      <button className="carousel-control-prev" type="button" data-bs-target="#workexp" data-bs-slide="prev">
        <span className="carousel-control-prev-icon bg-dark"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#workexp" data-bs-slide="next">
        <span className="carousel-control-next-icon bg-dark"></span>
      </button>
    </div>
  )
}

export default WorkExperience
