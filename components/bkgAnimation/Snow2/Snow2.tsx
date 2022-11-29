import { useEffect, useState } from 'react'
import Style from './index.module.css'

const Snow2 = () => {
  const [stateSnow,setStateSnow]=useState<string>("")
  
  const S:string = "Rain"

 useEffect(()=>{
  if (S == "Snow") {
    setStateSnow("/SnowDay/5-Snow2.svg")
  }
  else{
  }
},[])
  return (
    <>
      <img src={stateSnow} className={Style.Snow2} />
    </>
  )
}

export default Snow2
