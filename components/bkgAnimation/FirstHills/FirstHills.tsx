import {useState,useEffect} from 'react'
import Style from './index.module.css'

const FirstHills = () => {
  const [firstHills, setFirstHills] = useState<string>("")

  const S:string = "Clear"
  const Day:boolean = true;

  useEffect(() => {
    if (S == "Clear") {
      if (Day === true) {
        setFirstHills("/ClearDay/4-frontHills.svg")
      } else {
        setFirstHills("/ClearNight/4-frontHills.svg")
      }
    }
    else if (S == "Clouds") {
      if (Day === true) {
        
        setFirstHills("/ClodesDay/4-FrontHills.svg")
      } else {
        setFirstHills("/ClodesNight/4-FrontHills.svg")
        
      }
    }
    else if (S == "Snow") {
      if (Day === true) {
        
        setFirstHills("/SnowDay/4-FrontHills.svg")
      } else {
        setFirstHills("/SnowNight/4-FrontHills.svg")
        
      }
    }
    else if (S == "Rain" || S == "Drizzle") {
      if (Day === true) {
        
        setFirstHills("/RainDay/4-FrontHills.svg")
      } else {
        setFirstHills("/RainNight/4-FrontHills.svg")
        
      }
    }
    else if (S == "Thunderstorm") {
      if (Day === true) {
        
        setFirstHills("/RainDay/4-FrontHills.svg")
      } else {
        setFirstHills("/RainNight/4-FrontHills.svg")
        
      }
    }
  }, [])
  return (
    <>
     <img src={firstHills} className={Style.firstHills} /> 
    </>
  )
}

export default FirstHills
