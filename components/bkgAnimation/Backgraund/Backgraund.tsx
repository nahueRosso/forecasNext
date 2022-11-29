import { useEffect, useState } from 'react'
import Style from './index.module.css'

const Backgraund = () => {
  const [backgraund, setBackgraund] = useState<string>("")

  const S:string = "Clear"
  const Day:boolean = true;

  useEffect(() => {
    if (S == "Clear") {
      if (Day === true) {
        setBackgraund("/ClearDay/9-Bkg.svg")
      } else {
        setBackgraund("/ClearNight/9-Bkg.svg")
      }
    }
    else if (S == "Clouds") {
      if (Day === true) {
        
        setBackgraund("/ClodesDay/9-Bkg.svg")
      } else {
        setBackgraund("/ClearNight/9-Bkg.svg")
        
      }
    }
    else if (S == "Snow") {
      if (Day === true) {
        
        setBackgraund("/SnowDay/9-Bkg.svg")
      } else {
        setBackgraund("/ClearNight/9-Bkg.svg")
        
      }
    }
    else if (S == "Rain" || S == "Drizzle") {
      if (Day === true) {
        
        setBackgraund("/RainDay/9-Bkg.svg")
      } else {
        setBackgraund("/ClearNight/9-Bkg.svg")
        
      }
    }
    else if (S == "Thunderstorm") {
      if (Day === true) {
        
        setBackgraund("/RainDay/9-Bkg.svg")
      } else {
        setBackgraund("/ClearNight/9-Bkg.svg")
        
      }
    }
  }, [])
  return (
    <>
      <img src={backgraund} className={Style.backgroundAni} />
    </>
  )
}

export default Backgraund
