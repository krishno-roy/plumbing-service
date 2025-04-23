import React from 'react'
import Hero from './Hero'
import Service from './Service'
import Video from './Video'
import History from './History'
import PlumberPoint from './PlumberPoint'
import OurTeam from './OurTeam'
import Testimonial from './Testimonial'
import Blog from './Blog'


const Home = () => {
  return (
    <div>
        <Hero/>
        <Service/>
        <Video/>
        <History/>
        <PlumberPoint/>
        <OurTeam/>
        <Testimonial/>
        <Blog/>
    </div>
  )
}

export default Home