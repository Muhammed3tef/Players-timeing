import React, { useEffect, useState } from 'react'
import style from "./MorningRemembrance.module.css"
import axios from 'axios'



export default function MorningRemembrance() {
  const [morning, setMorning] = useState([])
  const [supMorning, setSupMorning] = useState([])

  async function getMorning() {
    let {data} = await axios.get(`https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json`)
    
    setMorning(data[`أذكار الصباح`])
    setSupMorning(data[`أذكار الصباح`][0])
  }

  useEffect(() => {
    getMorning()
  } ,[])


  return <>
<div className='awgat'>
<h1 className="text-center amiri-regular text-4xl font-bold text-emerald-600 pt-24 pb-8 ">
        أذكار الصباح
      </h1>
      {supMorning.length > 0 ? <div className="flex flex-col items-left justify-center md:ps-10  ps-4 ">
        {supMorning.map((mor) => <div className="amiri-regular text-2xl p-4" key={mor.content}>
          <h1>{mor.content} <span>({mor.count})</span></h1> 
          {mor.description.length > 0 ? <h3 className='text-xl relative top-4 text-red-600'>"{mor.description}"</h3> : null}
        </div>)}
      </div> : "MOrNing..."}
      {morning.length > 0 ? <div className="flex flex-col items-left justify-center md:ps-10  ps-4 shadow-2xl" >
       {morning.map((time) => <div className="amiri-regular text-2xl p-4"  key={time.content}>
        <h1>{time.content !== "stop" ? time.content : null} ({time[0] ? null : <span>{time.count !== "stop" ? (time.count) : null}</span>})</h1> 
        {time.description ? <h3 className='text-xl relative top-3 pb-2  text-red-600'>{time.description !== "stpo" ? time.description : null}</h3> : null}
       </div>
      )}
      </div> : "loading......."}
</div>

  </>
}
