import {useEffect, useState} from 'react'
import Style from './index.module.css'

const Snow1 = () => {
  const [stateSnow,setStateSnow]=useState<string>("")
  
  const S:string = "Rain"

 useEffect(()=>{
  if (S == "Snow") {
    setStateSnow("/SnowDay/3-Snow1.svg")
  }
  else{
  }
},[])
  return (
    <>
      <img src={stateSnow} className={Style.Snow1} />
    </>
  )
}

export default Snow1
