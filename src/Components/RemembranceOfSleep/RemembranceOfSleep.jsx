import React, { useEffect, useState } from 'react'
import axios from 'axios'



export default function RemembranceOfSleep() {
  const [morning, setMorning] = useState([])


  async function getMorning() {
    let {data} = await axios.get(`https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json`)
    
    setMorning(data[`أذكار النوم`])
    
  }

  useEffect(() => {
    getMorning()
  } ,[])


  return <>
<div className='awgat'> 
<h1 className="text-center amiri-regular text-4xl font-bold text-emerald-600 pt-24 pb-8 ">
        أذكار النوم
      </h1>
      {morning.length > 0 ? <div className="flex flex-col items-left justify-center md:ps-10  ps-4 shadow-2xl">
       {morning.map((time) => <div className="amiri-regular text-2xl p-4"  key={time.content}>
        <h1>{time.content  ? time.content : null} <span>({time.count  ? (time.count) : null})</span></h1> 
        {time.description ? <h3 className='text-xl relative top-3 pb-2 text-red-600'>{time.description ? time.description : null}</h3> : null}
       </div>
      )}
      </div> : "loading......."}
</div>

  </>
}
