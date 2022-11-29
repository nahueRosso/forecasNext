import {useState,useEffect} from 'react'
import Style from './index.module.css'

const SecondHills = () => {

  const [secondHills, setSecondHills] = useState<string>("")

  const S:string = "Clear"
  const Day:boolean = true;

  useEffect(() => {
    if (S == "Clear") {
      if (Day === true) {
        setSecondHills("/ClearDay/6-BackHills.svg")
      } else {
        setSecondHills("/ClearNight/6-backHills.svg")
      }
    }
    else if (S == "Clouds") {
      if (Day === true) {
        
        setSecondHills("/ClodesDay/6-BackHills.svg")
      } else {
        setSecondHills("/ClodesNight/6-BackHills.svg")
        
      }
    }
    else if (S == "Rain" || S == "Drizzle") {
      if (Day === true) {
        
        setSecondHills("/RainDay/6-BackHills.svg")
      } else {
        setSecondHills("/RainNight/6-BackHills.svg")
        
      }
    }
    else if (S == "Snow") {
      if (Day === true) {
        
        setSecondHills("/SnowDay/6-BackHills.svg")
      } else {
        setSecondHills("/SnowNight/6-BackHills.svg")
        
      }
    }
    else if (S == "Thunderstorm") {
      if (Day === true) {
        
        setSecondHills("/RainDay/6-BackHills.svg")
      } else {
        setSecondHills("/RainNight/6-BackHills.svg")
        
      }
    }
  }, [])
  return (
    <>
      <img src={secondHills} className={Style.secondHills} />
    </>
  )
}

export default SecondHills
