import React, { useEffect, useState } from 'react'
import style from "./Hadiths.module.css"
import axios from 'axios'


export default function Hadiths() {
  const [hadith, setHadith] = useState([])

  async function getHadith() {
    let {data} = await axios.get(`https://hadis-api-id.vercel.app/hadith/abu-dawud?page=2&limit=300`)
    
    setHadith(data.items)
    
  }  
  useEffect(() => {
    getHadith()
  } ,[])
  
  return <>
<div className='awgat'>
<h1 className="text-center amiri-regular text-4xl font-bold  text-emerald-600 pt-24 pb-8 ">
        الأحاديث
      </h1>
      {hadith.length > 0 ? <div className='p-3 ' >
        {hadith.map((had) => <h1 key={had.number} className='border-2 border-green-600 py-5 px-5 rounded-lg m-3 amiri-regular  text-xl'>
          {had.arab}
        </h1>)}
      </div> : <div className='loader'></div>}
</div>
  </>
}
