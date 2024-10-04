import React, { useEffect, useState } from 'react'
import style from "./PrayerTimes.module.css"
import axios from 'axios'
export default function PrayerTimes() {
  const [Hijiri, setHijiri] = useState([])
  const [WeekDay, setweekDay] = useState('')
  const [Melady, setMelady] = useState('')
  const [TimesOfPrayer, setTimesOfPrayer] = useState({})
  async function getTimes() {
    let today = new Date().getDate()  
    let month = new Date().getMonth() + 1 ;
    let year = new Date().getFullYear()              
    let {data} = await axios.get(`https://api.aladhan.com/v1/timingsByCity/${today}-${month}-${year}?city=cairo&country=egypt&method=8`)
    console.log(data.data.timings );
    setweekDay(data.data.date.hijri.weekday.ar)
    setHijiri(data.data.date.hijri.date)
    setMelady(data.data.date.readable)
    setTimesOfPrayer(data.data.timings)
  }
  useEffect(() => {
    getTimes()  
    document.title = "أوقات الصلاة"  
  } , [])
 
 return <>
  {WeekDay.length > 0 ? <div className='salah'>
<h1 className='text-center text-4xl font-bold text-emerald-600 py-20 md:py-20 '>أوقات الصلاة</h1>
  <div className='flex justify-center md:flex-row flex-col items-center  md:justify-between  md:px-20'>
  <h2 className='font-bold text-xl'>اليوم : <span>{WeekDay}</span></h2>
  <h2 className='font-bold text-xl'>{Hijiri}</h2>
  <h2 className='font-bold text-xl melad'>{Melady}</h2>
  </div>
  <div className=' md:flex justify-center gap-10  items-center md:p-5   my-10'>
    <div className='bg-slate-100 awgat md:py-10 py-14 px-20 m-3 md:m-0 rounded-lg flex flex-col items-center shadow-lg '>
      <h1 className='py-14 px-10 rounded-full  text-2xl border-4 border-green-600 font-bold'>{TimesOfPrayer.Imsak}</h1>
      <h2 className='text-2xl text-green-600 font-bold py-3 amiri-regular'>الأمساك</h2>
    </div>
    <div className='bg-slate-100 awgat md:py-10 py-14 px-20 m-3 md:m-0 rounded-lg flex flex-col items-center shadow-lg '>
      <h1 className='py-14 px-10 rounded-full  text-2xl border-4 border-green-600 font-bold'>{TimesOfPrayer.Fajr}</h1>
      <h2 className='text-2xl text-green-600 font-bold py-3 amiri-regular'>الفجر</h2>
    </div>
    <div className='bg-slate-100 awgat md:py-10 py-14 px-20 m-3 md:m-0 rounded-lg flex flex-col items-center shadow-lg '>
      <h1 className='py-14 px-10 rounded-full  text-2xl border-4 border-green-600 font-bold'>{TimesOfPrayer.Sunrise}</h1>
      <h2 className='text-2xl text-green-600 font-bold py-3 amiri-regular'>الشروق</h2>
    </div>
    <div className='bg-slate-100 awgat md:py-10 py-14 px-20 m-3 md:m-0 rounded-lg flex flex-col items-center shadow-lg '>
      <h1 className='py-14 px-10 rounded-full  text-2xl border-4 border-green-600 font-bold'>{TimesOfPrayer.Dhuhr}</h1>
      <h2 className='text-2xl text-green-600 font-bold py-3 amiri-regular'>الظهر</h2>
    </div>
  </div>
  <div className=' md:flex justify-center gap-10  items-center md:p-5   mt-10'>
    <div className='bg-slate-100 awgat md:py-10 py-14 px-20 m-3 md:m-0 rounded-lg flex flex-col items-center shadow-lg '>
      <h1 className='py-14 px-10 rounded-full  text-2xl border-4 border-green-600 font-bold'>{TimesOfPrayer.Asr}</h1>
      <h2 className='text-2xl text-green-600 font-bold py-3 amiri-regular'>العصر</h2>
    </div>
    <div className='bg-slate-100 awgat  md:py-10 py-14 px-20 m-3 md:m-0 rounded-lg flex flex-col items-center shadow-lg '>
      <h1 className='py-14 px-10 rounded-full  text-2xl border-4 border-green-600 font-bold'>{TimesOfPrayer.Maghrib}</h1>
      <h2 className='text-2xl text-green-600 font-bold py-3 amiri-regular'>المغرب</h2>
    </div>
    <div className='bg-slate-100 awgat md:py-10 py-14 px-20 m-3 md:m-0 rounded-lg flex flex-col items-center shadow-lg '>
      <h1 className='py-14 px-10 rounded-full  text-2xl border-4 border-green-600 font-bold'>{TimesOfPrayer.Isha}</h1>
      <h2 className='text-2xl text-green-600 font-bold py-3 amiri-regular'>العشاء</h2>
    </div>
    <div className='bg-slate-100 awgat md:py-10 py-14 px-20 m-3 md:m-0 rounded-lg flex flex-col items-center shadow-lg '>
      <h1 className='py-14 px-10 rounded-full  text-2xl border-4 border-green-600 font-bold'>{TimesOfPrayer.Lastthird}</h1>
      <h2 className='text-2xl text-green-600 font-bold py-3 amiri-regular'>الثلت الاخير</h2>
    </div>
  </div>
</div> : <div className='loader'></div>}
  </>
}
