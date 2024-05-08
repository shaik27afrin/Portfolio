//import React, { useEffect,useRef } from 'react'
import React from 'react'
//import Typed from 'typed.js';
import pdf from '../pdf/Afreen $haik.pdf'
export default function HeroBody() {
    // const typedRef=useRef(null)
    // useEffect(() =>{
    //     const options={
    //     strings:[
    //         "Welcome to My Profile",
    //         "My Name is Shaik Maimoon",
    //     ],
    //     typeSpeed: 50,
    //     backSpeed:50,
    //     loop:true,
    // };
    // const typed=new Typed(typedRef.current,options)
    // return ()=>{
    //     typed.destroy()
    // }
    // },[])
  return (
    <>
    <section>
        <div id="up-showcase" 
         data-aos="fade-up"
         data-aos-duration="1000">
            <div id="showcase">
            <div id="down-showcase">
                    <div id="jobtitle">
                        <h4 data-aos="fade-right" data-aos-duration="1000">Graduate</h4>
                    </div>
                    <div id="intro">
                        <h1>Hi i am Shaik Afrin</h1>
                        {/* <h1 ref={typedRef}></h1> */}
                        
                        <h6>👋 Welcome to my digital space!  As a fresh graduate, I bring a blend of enthusiasm, creativity, and a
                            hunger to learn. Join me as I transform ideas into reality and grow as a professional. Let's
                            build something amazing together! 🌟</h6>
                    </div>
                      <div className="icons">
                      <a href={pdf} class="btn btn-dark" data-aos="fade-right" data-aos-duration="1000">Download Resume</a>
                    </div>  
                </div>
                <div id="photo">
                    <div>
                        <img src="logo192.png" alt="" width="370px"/>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    <section class="up-exp">
        <div class="experience"
         data-aos="fade-right">
            <div class="section-title">
                <h1>Experience</h1>
            </div>
            <div class="exp-detail">
                <div class="company-name">
                    <h1 class="reveal-right"  data-aos="fade-right">HR LABS</h1>
                    <p class="reveal-right"  data-aos="fade-right">Frontend Developer Intern</p>
                    <p class="reveal-right"  data-aos="fade-right">March, 2024 - April, 2024</p>
                </div>
                <div class="job-des reveal-left">
                    <p class="reveal-left"  data-aos="fade-left">Where we have created a static website using HTML, CSS, React and hosted
                        the website.</p>
                    <a href="https://hrlabs.in/" target="_blank" class="reveal-left" data-aos="fade-left">Website Link <i
                            class="fa-solid fa-arrow-up"></i></a>
                             
                </div>
            </div>
        </div>
    </section>
    <section className="up-exp">
        <div className="experience" 
         data-aos="fade-left"
         >
            <div className="section-title ">
                <h1>Education</h1>
            </div>
            <div className="exp-detail">
                <div className="company-name">
                    <h1 className="reveal-right" data-aos="fade-right">Annamacharya Institute Of Technology and Sciences</h1>
                    <p className="reveal-right" data-aos="fade-right">Rajampet, Andhra Pradesh</p>
                    <p className="reveal-right" data-aos="fade-right">2018 - 2022</p>
                </div>
                <div className="job-des">
                    <h5 className="reveal-left"data-aos="fade-left">Bachelor's in Electronics and Communication Engineering</h5>
                    <h5 className="reveal-left"data-aos="fade-left">GPA : 8.61</h5>
                </div>
            </div>
            <div className="exp-detail">
                <div className="company-name">
                    <h1 className="reveal-right" data-aos="fade-right">AP Residential Junior College</h1>
                    <p className="reveal-right"data-aos="fade-right">Banavasi, Andhra Pradesh</p>
                    <p className="reveal-right"data-aos="fade-right">2016 - 2018</p>
                </div>
                <div className="job-des">
                    <h5 className="reveal-left"data-aos="fade-left">AP Board of Intermediate Education(MPC)</h5>
                    <h5 className="reveal-left"data-aos="fade-left">Percentage : 97%</h5>
                </div>
            </div>
            <div className="exp-detail">
                <div className="company-name">
                    <h1 className="reveal-right" data-aos="fade-right">Sree Saraswathi School</h1>
                    <p className="reveal-right"data-aos="fade-right">Peddavadugur, Andhra Pradesh</p>
                    <p className="reveal-right"data-aos="fade-right">2015 - 2016</p>
                </div>
                <div className="job-des">
                    <h5 className="reveal-left"data-aos="fade-left">The Board of Secondary Education Of Andhra Pradesh</h5>
                    <h5 className="reveal-left"data-aos="fade-left">GPA : 9.8</h5>
                </div>
            </div>
        </div>
    </section>
    <section id="skill-sec">
        <div id="skill-main" 
        data-aos="fade-right"
        data-aos-duration="1000">
            <div className="skillset-div section-title">
                <h1>Skills</h1>
                <div>
                    <ul>
                        <li><img src="Java.png" alt="Java logo" className="logo"/>Java</li>
                        <li><img src="logo192.png" alt="React Logo" className="logo"/>React</li>
                        <li><img src="html_logo.png" alt="HTML logo" className="logo"/>HTML</li>
                        <li><img src="css.png" alt="Css logo" className="logo"/>CSS</li>
                        <li><img src="js_logo.png" alt="JavaScript logo" className="logo"/>JavaScript</li>
                        {/* <li><img src="mysql_logo.png" alt="Mysql logo" className="logo"/>SQL</li> */}
                    </ul>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
