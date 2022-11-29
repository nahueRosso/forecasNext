import {useState,useEffect} from 'react'
import Style from './index.module.css'

const MillBlades = () => {
 

  useEffect(() => {
    
  }, [])
  return (
    <div className={Style.bladeContainer}>
      <img src='/Blades/Blades.svg' className={Style.Blades} />
      <img src="/Blades/BackBlades.svg" className={Style.BackBlades} />
    </div>
  )
}

export default MillBlades
