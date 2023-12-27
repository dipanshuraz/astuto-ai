'use client'

import React,{useState} from 'react'
import Bottom from './component/Bottom'
import Top from './component/Top'

function Home() {
    const [isShow, setIsShow] = useState(true)
  return (

    <div className='flex flex-col justify-between items-center w-full h-screen pb-4 pt-6 px-4'>
      {!isShow? <Top/>:  <div></div>}
      <Bottom setIsChartStart={setIsShow} isChartStart={isShow} />
    </div>

  )
}

export default Home