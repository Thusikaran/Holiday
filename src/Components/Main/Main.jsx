import React, { useEffect } from 'react'
import './main.scss'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'

import img1 from '../../Assets/img (1).jpg'
import img2 from '../../Assets/img (2).jpg'
import img3 from '../../Assets/img (3).jpg'
import img4 from '../../Assets/img (4).jpg'
import img5 from '../../Assets/img (5).jpg'
import img6 from '../../Assets/img (6).jpg'
import img7 from '../../Assets/img (7).jpg'
import img8 from '../../Assets/img (8).jpg'
import img9 from '../../Assets/img (9).jpg'
import img10 from '../../Assets/img (2).jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

//array of data
const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place known for its luxurious stays and adventurous activities.'
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Maui',
    location: 'Hawaii, USA',
    grade: 'ADVENTURE NATURE',
    fees: '$650',
    description: 'A tropical paradise, Maui offers stunning beaches, lush rainforests, and volcanic landscapes. Ideal for those seeking adventure and natural beauty.'
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Paris',
    location: 'France',
    grade: 'CULTURAL EXPLORE',
    fees: '$800',
    description: 'Known as the City of Love, Paris boasts iconic landmarks, world-class museums, and charming cafes. Perfect for cultural exploration and romance.'
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Tokyo',
    location: 'Japan',
    grade: 'URBAN EXCITEMENT',
    fees: '$750',
    description: 'A bustling metropolis, Tokyo is a blend of traditional culture and modern innovation. Experience vibrant nightlife, shopping, and unique culinary delights.'
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Santorini',
    location: 'Greece',
    grade: 'SCENIC RELAX',
    fees: '$680',
    description: 'Famous for its stunning sunsets and white-washed buildings, Santorini is a top destination for relaxation and breathtaking views of the Aegean Sea.'
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Banff',
    location: 'Canada',
    grade: 'NATURE ESCAPE',
    fees: '$550',
    description: 'Nestled in the heart of the Canadian Rockies, Banff offers pristine wilderness, majestic mountains, and crystal-clear lakes. Ideal for nature lovers and outdoor activities.'
  },
  // {
  //   id: 7,
  //   imgSrc: img7,
  //   destTitle: 'Dubai',
  //   location: 'UAE',
  //   grade: 'LUXURY URBAN',
  //   fees: '$900',
  //   description: 'Known for its ultramodern architecture and luxury shopping, Dubai is a city of superlatives. Enjoy high-end experiences and desert adventures.'
  // },
  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Rome',
    location: 'Italy',
    grade: 'HISTORIC EXPLORE',
    fees: '$720',
    description: 'Step back in time in Rome, where ancient history and vibrant culture collide. Visit historical landmarks, enjoy delicious cuisine, and explore charming streets.'
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Maldives',
    location: 'Indian Ocean',
    grade: 'TROPICAL LUXURY',
    fees: '$950',
    description: 'Renowned for its overwater bungalows and crystal-clear waters, the Maldives is the ultimate tropical luxury destination. Perfect for romantic getaways and relaxation.'
  },
  {
    id: 10,
    imgSrc: img10,
    destTitle: 'Kyoto',
    location: 'Japan',
    grade: 'CULTURAL HERITAGE',
    fees: '$700',
    description: 'Rich in history and tradition, Kyoto is home to beautiful temples, stunning gardens, and traditional tea houses. Ideal for experiencing Japan\'s cultural heritage.'
  }
]


const Main = () => {
   //let create a react hook to add a scroll
   useEffect(()=>{
    Aos.init({duration:2000})
},[])
  return (
    <section className="main container section">

        <div className="secTitle">
           <h3 data-aos='fade-up' className="title">
              Most visited destinations
           </h3>
        </div>

        <div className="secContent grid">
            {
              Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
                 return(
                  <div data-aos='fade-up' key={id} className="singleDestination">
                      <div className="imageDiv">
                         <img src={imgSrc} alt={destTitle} />
                      </div>
                      <div className="cardInfo">
                        <h4 className="destTitle">
                           {destTitle}
                        </h4>
                        <span className="content flex">
                            <HiOutlineLocationMarker className='icon'/>
                            <span className="name">{location}</span>
                        </span>
                        <div className="fees flex">
                           <div className="grade">
                               <span>{grade}<small>+1</small> </span>
                           </div>
                           <div className="price">
                               <h5>{fees}</h5>
                           </div>
                        </div>

                        <div className="desc">
                          <p>{description}</p>
                        </div>

                        <button className="btn flex">
                            DETAILS <HiOutlineClipboardCheck className='icon'/>
                        </button>

                      </div>
                  </div>
                 )
              })
            }
        </div>

    </section>
  )
}

export default Main 