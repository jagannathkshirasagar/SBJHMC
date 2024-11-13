import React from 'react'
import landingPage from "../LandingPage/landingPage.css"
import Logo from "../Gallery/ssbj-logo.jpg"
import vc3 from "../videos/vc3.mp4"
import mem1 from "../GYM/shashil.jpg"
import ren1 from "../Gallery/ren1.jpeg"
import grd3 from "../Gallery/grd3.webp"
import gym13 from "../GYM/13.jpg"
import graduation1 from "../GYM/istockphoto-1851964451-640_adpp_is.mp4"
import KAV from "../GYM/KAV.jpg"
import nasrin from "../GYM/NASRIN.jpg"
const LandingPage = () => {
    return (
        <>

            <div class="container-fluid p-0">
                <div class="row g-0  " >
                    <div class="container-fluid align-items-center" style={{ backgroundColor: "#5e88c240" }}>
                        <div class="row justify-content-center no-gutters p-3 ">
                            <div class="col-2">
                                <img class="mw-100 rounded-circle" src={Logo} alt="Max-width 100%" />
                            </div>
                            <div class="col-10">

                                <div class=" row collegeName  ml-4 text-dark  align-content-center align-items-center " >
                                    SHREE SHIV BASAV JYOTI HOMOEOPATHIC MEDICAL COLLEGE & HOSPITAL BELGAUM
                                </div>
                                <div class="row site_description">
                                    <h4 class="fw-bolder" style={{ fontFamily: " sans-serif" }}>Bauxite Road, Sahyadri Nagar, Belagavi, Karnataka 591108</h4>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
                <div className='row g-0 ' style={{ backgroundColor: 'rgb(255 80 41 / 5%)' }}>
                    <div className='col-6'>
                        <video className='videoTag w-100 h-100 p-3' style={{borderRadius:'50px'}} autoPlay loop muted>
                            <source src={vc3} type='video/mp4' />
                        </video>
                    </div>
                    <div className='col-6 bg-wrapper' >
                        <div className='row justify-content-center'>
                            <div className=' mt-5 w-75 mb-2' style={{ borderBottom: '4px solid Red' }}>
                                <h2 className='fw-bolder h-50 text-center ' style={{ fontFamily: '"Rubik",sans-serif', fontSize: '38px', color: 'rgb(253 75 54)', }}>GYMKHANA COMMITTY</h2>
                            </div>
                        </div>
                        <div className='row justify-content-center '>
                            <p className='fw-bolder  text-dark ' style={{fontSize:'20px',left:'0px' ,color:'#4B4B4B',fontWeight:'300',fontFamily:'Noto Sans'}}> We are Pleased to Welcome you to the amazing and ever growing <br />
                            {/* <h3 className='fw-bolder fst-italic '>"SBJHMC Alumni Association"</h3> */}
                            <h2 className='fw-bolder h-50 my-2 text-center  fst-italic' style={{ fontFamily: '"Rubik",sans-serif', fontSize: '25px', color: 'rgb(253 75 54)', }}>"SBJHMC Alumni Association"</h2>
                             </p>
                            <p className='fw-bold w-75  text-dark' style={{fontSize:'20px',left:'0px' ,color:'#4B4B4B',fontWeight:'300',fontFamily:'Noto Sans'}}>We are proud of you,our most valluable asset,for being patient in all aspects of life.Take this opportunity to request and to kep this valued association strong and steadfast.</p>
                            <p className='fw-bold w-75 text-dark ' style={{fontSize:'20px',left:'0px' ,color:'#4B4B4B',fontWeight:'300',fontFamily:'Noto Sans'}}> Wishing success beyound leaps and bounds of all our alumni in medical Fraternity they are working in.May we together conquer greater heights and grow in our influenc globally.</p>
                        </div>
                        {/* <div className='row align-items-center justify-content-center'>
                            <button type="button " class="btn btn-primary w-25">Register</button>
                        </div> */}
                    </div>


                </div>
                <div className='row g-0 ' style={{ backgroundColor: 'rgb(255 80 41 / 5%)' }}>
                
                    <div className='col-6 bg-wrapper' >
                        <div className='row justify-content-center'>
                            <div className=' mt-5 w-75 mb-2' style={{ borderBottom: '4px solid Red' }}>
                                <h2 className='fw-bolder h-50 text-center ' style={{ fontFamily: '"Rubik",sans-serif', fontSize: '38px', color: 'rgb(253 75 54)', }}>Graduation Day</h2>
                            </div>
                        </div>
                        <div className='row justify-content-center '>
                            <p className='fw-bolder  text-dark ' style={{fontSize:'20px',left:'0px' ,color:'#4B4B4B',fontWeight:'300',fontFamily:'Noto Sans'}}> A once-in-a-lifetime moment for every student, the graduation ceremony is a formal event that marks the successful completion of a course of study. Graduation day often gives students a chance to celebrate their happiness of completing their efforts to get their much coveted and highly reputed college degree. This article covers complete details on the graduation day ceremony . </p>
                            </div>
                        {/* <div className='row align-items-center justify-content-center'>
                            <button type="button " class="btn btn-primary w-25">Register</button>
                        </div> */}
                    </div>
                    <div className='col-6'>
                        <video className='videoTag w-100 h-100 p-3' style={{borderRadius:'50px'}} autoPlay loop muted>
                            <source src={graduation1} type='video/mp4' />
                        </video>
                    </div>


                </div>
                <div class="row g-0" style={{backgroundColor:'#f6f5fa'}}>
                   
                    <div class="col-lg-6 my-auto showcase-text justify-content-center p-2 ">
                        <h2 className='fw-bolder h-50 text-center ' style={{ fontFamily: '"Rubik",sans-serif', fontSize: '38px', color: 'rgb(253 75 54)', }}>About GYMKHANA</h2>
                        <p class="lead mb-0 "style={{fontSize:'20px',left:'0px' ,color:'#4B4B4B',paddingRight:'20px',fontWeight:'300',fontFamily:'Noto Sans'}}>The Cultural Committee of <nr/><p className='fw-bolder'>" SHREE SHIV BASAV JYOTI HOMOEOPATHIC MEDICAL COLLEGE & HOSPITAL BELGAUM"</p>  strives to celebrate the cultural diversity in the college by organizing various competitions, events, activities, programs every year. The Committee provides various opportunities for the students to relax, to enhance their skills and talents. The Teacher and Student Coordinator of the Cultural Committee take a lot of efforts to plan, to Guide, to organize the various events and competitions in the college at Intra and Intercollegiate level.</p>
                    </div>
                    <div class="col-lg-6 text-white showcase-img" >
                    <img src={gym13} className="card-img-top m-auto my-3 " alt="..."  style={{borderRadius:'30px'}}/>
</div>
                </div>
                <div className='row'>
                    <h1 className="fw-bolder"  style={{ fontSize:'20px',left:'0px' ,color:'#4B4B4B',fontWeight:'300',fontFamily:'Noto Sans' ,color: 'rgb(253 75 54)',}}>COMMITTY MEMBERS</h1>
                </div>
                <div className='row my-3 align-items-center justify-content-center' style={{}}>
                <div className='col-4'>
                <img class="mw-100" src={ren1} alt="Max-width 100%" />
                </div>
                <div className='col-8 d-flex align-items-center'>
                <div className='col'>
                        <div class="card justify-content-center" style={{width: "18rem",backgroundColor:'#f6f7ff',borderRadius:'30px',}}>
                            <img src={mem1} className="card-img-top m-auto my-3 " alt="..."  style={{width:'100px',height:'100px',borderRadius:'100px'}}/>
                            <div class="card-body">
                                <h3 style={{fontSize:'20px',color:'#4B4B4B',fontWeight:'900',fontFamily:'Noto Sans'}}>SHASHIL</h3>
                                <h5 class="card-title" style={{fontSize:'20px',fontWeight:'900',fontFamily:'Noto Sans'}}> GENERAL SECRETERY  </h5>                         
                         
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div class="card justify-content-center " style={{width: "18rem",borderRadius:'30px',backgroundColor:'#f6f7ff'}}>
                            <img src={nasrin} className="card-img-top m-auto my-3 " alt="..."  style={{width:'100px',height:'100px',borderRadius:'100px'}}/>
                            <div class="card-body">
                                <h3 style={{fontSize:'20px',color:'#4B4B4B',fontWeight:'900',fontFamily:'Noto Sans'}}>NASRIN</h3>
                                <h5 class="card-title" style={{fontSize:'20px',fontWeight:'900',fontFamily:'Noto Sans'}}> Jt.GENERAL SECRETERY  </h5>                         
                         
                            </div>
                        </div>
                    </div>
                </div>
                   
                    
                 
                </div>
                <div className='row mt-5 d-flex justify-content-center' style={{background:"linear-gradient(278.2deg, #e5d5fc .01%, #f8f3ff 84.38%)" }}>
                    <div className='col-3 mx-2'>
                    <div class="card justify-content-center my-3" style={{width: "18rem",backgroundColor:'#f6f7ff',borderRadius:'30px',}}>
                            <img src={mem1} className="card-img-top m-auto my-3 " alt="..."  style={{width:'100px',height:'100px',borderRadius:'100px'}}/>
                            <div class="card-body">
                                <h3 style={{fontSize:'20px',color:'#4B4B4B',fontWeight:'900',fontFamily:'Noto Sans'}}>ADITYA</h3>
                                <h5 class="card-title" style={{fontSize:'18px',fontWeight:'900',fontFamily:'Noto Sans'}}> CULTARAL SECRETERY  </h5>                         
                         
                            </div>
                        </div>
                    </div>
                    <div className='col-3 mx-2'>
                    <div class="card justify-content-center my-3" style={{width: "18rem",backgroundColor:'#f6f7ff',borderRadius:'30px',}}>
                            <img src={mem1} className="card-img-top m-auto my-3 " alt="..."  style={{width:'100px',height:'100px',borderRadius:'100px'}}/>
                            <div class="card-body">
                                <h3 style={{fontSize:'20px',color:'#4B4B4B',fontWeight:'900',fontFamily:'Noto Sans'}}>SMEETA</h3>
                                <h5 class="card-title" style={{fontSize:'18px',fontWeight:'900',fontFamily:'Noto Sans'}}>  CULTARAL SECRETERY </h5>                         
                         
                            </div>
                        </div>
                    </div>
                    <div className='col-3 mx-2'>
                    <div class="card justify-content-center my-3" style={{width: "18rem",backgroundColor:'#f6f7ff',borderRadius:'30px',}}>
                            <img src={mem1} className="card-img-top m-auto my-3 " alt="..."  style={{width:'100px',height:'100px',borderRadius:'100px'}}/>
                            <div class="card-body">
                                <h3 style={{fontSize:'20px',color:'#4B4B4B',fontWeight:'900',fontFamily:'Noto Sans'}}>CHAITRA</h3>
                                <h5 class="card-title" style={{fontSize:'18px',fontWeight:'900',fontFamily:'Noto Sans'}}>Jt.CULTARAL SECRETERY  </h5>                         
                         
                            </div>
                        </div>
                    </div>
                    <div className='col-3 mx-2'>
                    <div class="card justify-content-center my-3" style={{width: "18rem",backgroundColor:'#f6f7ff',borderRadius:'30px',}}>
                            <img src={mem1} className="card-img-top m-auto my-3 " alt="..."  style={{width:'100px',height:'100px',borderRadius:'100px'}}/>
                            <div class="card-body">
                                <h3 style={{fontSize:'20px',color:'#4B4B4B',fontWeight:'900',fontFamily:'Noto Sans'}}>SOURABH</h3>
                                <h5 class="card-title" style={{fontSize:'18px',fontWeight:'900',fontFamily:'Noto Sans'}}> SPORTS SECRETERY  </h5>                         
                         
                            </div>
                        </div>
                    </div>
                    <div className='col-3 mx-2'>
                    <div class="card justify-content-center my-3" style={{width: "18rem",backgroundColor:'#f6f7ff',borderRadius:'30px',}}>
                            <img src={mem1} className="card-img-top m-auto my-3 " alt="..."  style={{width:'100px',height:'100px',borderRadius:'100px'}}/>
                            <div class="card-body">
                                <h3 style={{fontSize:'20px',color:'#4B4B4B',fontWeight:'900',fontFamily:'Noto Sans'}}>OMKAR</h3>
                                <h5 class="card-title" style={{fontSize:'18px',fontWeight:'900',fontFamily:'Noto Sans'}}>  SPORTS SECRETERY </h5>                         
                         
                            </div>
                        </div>
                    </div>
                    <div className='col-3 mx-2'>
                    <div class="card justify-content-center my-3" style={{width: "18rem",backgroundColor:'#f6f7ff',borderRadius:'30px',}}>
                            <img src={mem1} className="card-img-top m-auto my-3 " alt="..."  style={{width:'100px',height:'100px',borderRadius:'100px'}}/>
                            <div class="card-body">
                                <h3 style={{fontSize:'20px',color:'#4B4B4B',fontWeight:'900',fontFamily:'Noto Sans'}}>AISHWARYA</h3>
                                <h5 class="card-title" style={{fontSize:'18px',fontWeight:'900',fontFamily:'Noto Sans'}}>Jt.SPORTS SECRETERY  </h5>                         
                         
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row my-3 align-items-center justify-content-center' style={{background:"linear-gradient(276.64deg, rgb(241, 211, 211) 0.01%, rgb(255, 245, 245) 82.2%)"}}>
              
                <div className='col-8 d-flex align-items-center'>
                <div className='col'>
                        <div class="card justify-content-center" style={{width: "18rem",backgroundColor:'#f6f7ff',borderRadius:'30px',}}>
                            <img src={mem1} className="card-img-top m-auto my-3 " alt="..."  style={{width:'100px',height:'100px',borderRadius:'100px'}}/>
                            <div class="card-body">
                                <h3 style={{fontSize:'20px',color:'#4B4B4B',fontWeight:'900',fontFamily:'Noto Sans'}}>MASEERA</h3>
                                <h5 class="card-title" style={{fontSize:'20px',fontWeight:'900',fontFamily:'Noto Sans'}}> MAGAZINE SECRETERY  </h5>                         
                         
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div class="card justify-content-center " style={{width: "18rem",borderRadius:'30px',backgroundColor:'#f6f7ff'}}>
                            <img src={KAV} className="card-img-top m-auto my-3 " alt="..."  style={{width:'100px',height:'100px',borderRadius:'100px'}}/>
                            <div class="card-body">
                                <h3 style={{fontSize:'20px',color:'#4B4B4B',fontWeight:'900',fontFamily:'Noto Sans'}}>KAVYA RAMPURE</h3>
                                <h5 class="card-title" style={{fontSize:'20px',fontWeight:'900',fontFamily:'Noto Sans'}}> Jt.MAGAZINE SECRETERY  </h5>                         
                         
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-4' >
                <img class="mw-100" style={{background:"linear-gradient(278.2deg, #e5d5fc .01%, #f8f3ff 84.38%)" }} src={grd3} alt="Max-width 100%" />
                </div>                                 
                 
                </div>
                <div className='row mt-5 d-flex justify-content-center px-4' style={{background:"linear-gradient(278.2deg, #e5d5fc .01%, #f8f3ff 84.38%)" }}>
                    <div className='col-3 ' style={{}}>
                    <div class="card justify-content-center my-3" style={{width: "18rem",backgroundColor:'#f6f7ff',borderRadius:'30px',}}>
                            <img src={mem1} className="card-img-top m-auto my-3 " alt="..."  style={{width:'100px',height:'100px',borderRadius:'100px'}}/>
                            <div class="card-body">
                                <h3 style={{fontSize:'20px',color:'#4B4B4B',fontWeight:'900',fontFamily:'Noto Sans'}}>PRATIK</h3>
                                <h5 class="card-title" style={{fontSize:'18px',fontWeight:'900',fontFamily:'Noto Sans'}}> SOCIALMEDIA SECRETERY  </h5>                         
                         
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                    <div class="card justify-content-center my-3" style={{width: "18rem",backgroundColor:'#f6f7ff',borderRadius:'30px',}}>
                            <img src={mem1} className="card-img-top m-auto my-3 " alt="..."  style={{width:'100px',height:'100px',borderRadius:'100px'}}/>
                            <div class="card-body">
                                <h3 style={{fontSize:'20px',color:'#4B4B4B',fontWeight:'900',fontFamily:'Noto Sans'}}>MUSAIB</h3>
                                <h5 class="card-title" style={{fontSize:'18px',fontWeight:'900',fontFamily:'Noto Sans'}}> Jt.SOCIALMEDIA SECRETERY </h5>                         
                         
                            </div>
                        </div>
                    </div>
                    <div className='col-3 '>
                    <div class="card justify-content-center my-3" style={{width: "18rem",backgroundColor:'#f6f7ff',borderRadius:'30px',}}>
                            <img src={mem1} className="card-img-top m-auto my-3 " alt="..."  style={{width:'100px',height:'100px',borderRadius:'100px'}}/>
                            <div class="card-body">
                                <h3 style={{fontSize:'20px',color:'#4B4B4B',fontWeight:'900',fontFamily:'Noto Sans'}}>ANAND</h3>
                                <h5 class="card-title" style={{fontSize:'18px',fontWeight:'900',fontFamily:'Noto Sans'}}>DISCIPLINE SECRETERY  </h5>                         
                         
                            </div>
                        </div>
                    </div>
                    <div className='col-3 '>
                    <div class="card justify-content-center my-3" style={{width: "18rem",backgroundColor:'#f6f7ff',borderRadius:'30px',}}>
                            <img src={mem1} className="card-img-top m-auto my-3 " alt="..."  style={{width:'100px',height:'100px',borderRadius:'100px'}}/>
                            <div class="card-body">
                                <h3 style={{fontSize:'20px',color:'#4B4B4B',fontWeight:'900',fontFamily:'Noto Sans'}}>SHWETHA</h3>
                                <h5 class="card-title" style={{fontSize:'18px',fontWeight:'900',fontFamily:'Noto Sans'}}> Jt.DISCIPLINE SECRETERY  </h5>                         
                         
                            </div>
                        </div>
                    </div>
              
                </div>
                <div className='row '>
                    <div className='col-12 text-center'>
                    <a target="_blank"  className=" border-0" href="https://alliance.edu.in/"><i class="icon icon-solid icon-websitelink"></i> SBJHMC</a>

                    </div>
                </div>
                
            </div>



        </>


    )
}

export default LandingPage