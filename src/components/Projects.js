import React from 'react'
//import { FaPython } from "react-icons/fa";
import { FaBookAtlas } from "react-icons/fa6";
//import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoMdAlarm } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
export default function Projects() {
  return (
    <>
    <section className="up-exp">
        <div id="project-div">
            <div className="section-title ">
                <h1 data-aos="fade-up">Projects</h1>
            </div>
            <div id="all-projects">
                
                <div className="project-des"
                data-aos="zoom-out"
                data-aos-duration="1000">
                    <div>
                        
                        <IoMdAlarm id="react-icon"/>
                        <h5>AlarmClock component </h5>
                        <p>The AlarmClock component is a React Timer that displays the current time and allows users to set an alarm time. 
                            It alerts the user when the alarm time matches the current time. 
                            The component is designed to be simple and user-friendly, featuring a clean interface with basic functionality for time management.
                        </p>
                    </div>
                </div>
                <div className="project-des"
                data-aos="zoom-out"
                data-aos-duration="1000">
                    <div>
                        <FaBookAtlas id="react-icon"/>
                        <h5>A Noval Multimodal Anatomical Medical Image Fusion using Structure Extraction</h5>
                        <p>In proposed image fusion method source multimodality images are 
                            decomposed into cartoon and texture components. For cartoon components a proper 
                            spatial based method is presented for morphological structure reservation. For texture 
                            components a sparse representation based method is proposed. This method performs the 
                            state of art methods in terms of visual and quantitative evaluations  
                        </p>
                    </div>
                </div>
                {/* <div className="project-des"
                data-aos="zoom-out"
                data-aos-duration="1000">
                    <div>
                        <FaPython id="react-icon"></FaPython>
                        <h5>Prediction of Cardiovascular Disease by Using Hybrid model of Machine Learning Algorithms </h5>
                        <p>This model enhances the prediction of cardiovascular illness prediction by 
                            combining different algorithms such as decision tree, random forestand XGboost using ensemble laerning.
                        </p>
                    </div>
                </div> */}
            </div>
        </div>
    </section>
    <footer>
        <div id="footer-name" className="footer-all">
            <h1>SHAIK AFRIN</h1>
        </div>
        <div id="footer-icons" className="icons footer-all">
            <div>
                <a href="https://github.com/shaik27afrin" target="_blank" rel="noreferrer"><FaGithub/></a>
            </div>
            <div>
                <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHxDn-G4CUfWgAAAY9YYltA7WKZ5_GQgWvAc0PNPZRAGU1zLaWXcLJdZpi8C9ay6EBxIbh19sgdkHNOjH5MGdBciLiJxiIpJAn9y9Q1NV5-LRMu2iF-oaRkCvVEIUBPFzqqFy0=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fshaik-afrin-4650821a4%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>
            <div>
                <a href="mailto:shaik27afrin@gmail.com" target="_blank" rel="noreferrer"><BiLogoGmail /></a>
            </div>
            
        </div>
        <div id="footer-copy" className="footer-all">
            <h1>&copy; All rights reserved Portfolio</h1>
        </div>
    </footer>
    </>
  )
}
