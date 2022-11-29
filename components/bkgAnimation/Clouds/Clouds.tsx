import {useState,useEffect} from 'react'
import Style from './index.module.css'

const Clouds = () => {
  const [clouds, setClodes] = useState<string>("")
  const [frontHaze, setFrontHaze] = useState<string>("")
  const [backHaze, setBackHaze] = useState<string>("")
  const [stars, setStars] = useState<string>("")

  const S:string = "Clear"
  const Day:boolean = true;

  useEffect(() => {

    if (S == "Clear") {
      if (Day === true) {
        setClodes("")
        setFrontHaze("")
        setBackHaze("")
        setStars("")
      } else {
        setClodes("")
        setFrontHaze("")
        setBackHaze("")
        setStars("/ClearNight/7-Stars.svg")
      }
    }
    
    
    else if (S == "Thunderstorm" || S == "Clouds" || S == "Snow" || S == "Rain" || S == "Drizzle") {
        setClodes("/ClodesDay/7-FrontHaze.svg")
        setFrontHaze("/ClodesDay/7-clouds.svg")
        setBackHaze("/ClodesDay/7-BackHaze.svg")
        setStars("")
      
    }
   
  }, [])
  return (
    <>
      <img src={clouds} className={Style.clodes} />
      <img src={frontHaze} className={Style.frontHaze} />
      <img src={backHaze} className={Style.backHaze} />
      <img src={stars} className={Style.stars} />
    </>
  )
}

export default Clouds
