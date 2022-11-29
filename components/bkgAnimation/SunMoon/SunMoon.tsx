import {useEffect, useState} from 'react'
import Style from './index.module.css'

const SunMoon = () => {
  const [sunMoon,setSunMoon]=useState<string>("")
  
  const day:boolean = true

 useEffect(()=>{
  if (day === true) {
    setSunMoon("/ClearDay/8-Sun.svg")
  }
  else{
    setSunMoon("/ClearNight/8-Moon.svg")
  }
},[])


  return (
    <>
      <img src={sunMoon} className={Style.sunMoon} />
    </>
  )
}

export default SunMoon
