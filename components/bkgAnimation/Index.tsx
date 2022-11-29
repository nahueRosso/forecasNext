import React from 'react'
import SunMoon from './SunMoon/SunMoon'
import Backgraund from "./Backgraund/Backgraund";
import CloudsStars from './Clouds/Clouds'
import MillBlades from './millBlades/MillBlades'
import FrontHills from './FirstHills/FirstHills'
import Weather from './Weather/Weather'
import BackHills from './SecondHills/SecondHills'
import Snow1 from './Snow1/Snow1'
import Snow2 from './Snow2/Snow2'

const Index = () => {
  return (
    <div style={{zIndex:-1000}}>
      <Weather />
      <MillBlades />
      <Snow1 />
      <FrontHills />
      <Snow2 />
      <BackHills />
      <CloudsStars />
      <SunMoon />
      <Backgraund />
    </div>
  )
}

export default Index
