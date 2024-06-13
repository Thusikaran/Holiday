import React, { useEffect } from 'react'
import './footer.scss'
import video from '../../Assets/video2.mp4'
import { FiChevronRight, FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
    //let create a react hook to add a scroll
   useEffect(()=>{
      Aos.init({duration:2000})
  },[])
  return (
    
    <section className="footer">
      <div className="videoDiv">
         <video src={video} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">

         <div  className="contactDiv flex">

           <div  data-aos='fade-up' className="text">
              <small>KEEP IN TOUCH</small>
              <h2>Travel with us</h2>
           </div>

           <div className="inputDiv flex">
              <input data-aos='fade-up' type="text" placeholder='Enter Email Address' />
              <button data-aos='fade-up' className="btn flex" type="submit">
                  SEND <FiSend className='icon'/>
              </button>
           </div>

         </div>

         <div className="footerCard flex">

            <div className="footerIntro flex">

              <div className="logoDiv">
                <a href="#" className="logo flex">
                    <MdOutlineTravelExplore className='icon'/> Travel.
                </a>
              </div>
  
              <div data-aos='fade-up' className="footerParagraph">
                  he href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link
              </div>

              <div data-aos='fade-up' className="footerSocials">
                <AiOutlineTwitter className='icon'/>
                <AiFillYoutube className='icon'/>
                <AiFillInstagram className='icon'/>
                <FaTripadvisor className='icon'/>

              </div>

            </div>

           
            <div className="footerLinks grid">
               {/* Group One */}
               <div data-aos='fade-up' fade-up-duration="3000" className="linkGroup">
                  <span className="linkTitle">
                     OUR AGENCY
                  </span>
                  <li className="footerList flex">
                     <FiChevronRight className='icon'/> Services
                  </li>
                  <li className="footerList flex">
                     <FiChevronRight className='icon'/> Insurance
                  </li>
                  <li className="footerList flex">
                     <FiChevronRight className='icon'/> Agency
                  </li>
                  <li className="footerList flex">
                     <FiChevronRight className='icon'/> Tourism
                  </li>
                  <li className="footerList flex">
                     <FiChevronRight className='icon'/> Payment
                  </li>
               </div>
            {/* </div> */}

            {/* Group two*/}
               <div fade-up-duration="4000" data-aos='fade-up' className="linkGroup">
                  <span className="linkTitle">
                     PARTNERS
                  </span>
                  <li className="footerList flex">
                     <FiChevronRight className='icon'/> Booking
                  </li>
                  <li className="footerList flex">
                     <FiChevronRight className='icon'/> Rendcars
                  </li>
                  <li className="footerList flex">
                     <FiChevronRight className='icon'/> HostelWorld
                  </li>
                  <li className="footerList flex">
                     <FiChevronRight className='icon'/> Trivago
                  </li>
                  <li className="footerList flex">
                     <FiChevronRight className='icon'/> TripAdvisor
                  </li>
               </div>

            {/* Group three */}
               <div data-aos='fade-up' fade-up-duration="5000" className="linkGroup">
                  <span className="linkTitle">
                     LAST MINUTE
                  </span>
                  <li className="footerList flex">
                     <FiChevronRight className='icon'/> London
                  </li>
                  <li className="footerList flex">
                     <FiChevronRight className='icon'/> California
                  </li>
                  <li className="footerList flex">
                     <FiChevronRight className='icon'/> Indonesia
                  </li>
                  <li className="footerList flex">
                     <FiChevronRight className='icon'/> Europe
                  </li>
                  <li className="footerList flex">
                     <FiChevronRight className='icon'/> Oceania
                  </li>
               </div>
            </div>

            <div className="footerDiv flex">
               <small>BEST TRAVEL WEBSITE THEME</small>
               <small>COPYRIGHTS RESERVED - ISRATECH 2022</small>
            </div>

         </div>

      </div>

    </section>
  )
}

export default Footer 