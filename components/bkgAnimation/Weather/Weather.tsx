import { useEffect, useState } from 'react'
import Style from './index.module.css'

const Weather = () => {
  const [stateGif, setStateGif] = useState<string>("")

  const ResultApi: any = "Cleaer"

  useEffect(() => {
    if (ResultApi === "Snow") {
      setStateGif("/snow.gif")
    }
    else if (ResultApi === "Rain" || ResultApi === "Drizzle") {

      setStateGif("/rain.gif")
    }
    else  {
      setStateGif("")
    }
  }, [])
  return (
    <div>
      <img src={stateGif} />
    </div>
  )
}

export default Weather
