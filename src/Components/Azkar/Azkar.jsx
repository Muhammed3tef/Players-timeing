import React, { useEffect, useState } from 'react'
import style from "./Azkar.module.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Azkar() {
  let x = useNavigate()

  const [doha, setDoha] = useState('')
  const [wakingUpReminders, setwakingUprEminders] = useState('')
  const [morningRemembrance, setmorningRemembrance] = useState('')
  const [eveningRemembrance, seteveningRemembrance] = useState('')
  const [remembranceOfSleep, setremembranceOfSleep] = useState('')
  const [remembranceAfterGreetingFromPrayer, setremembranceAfterGreetingFromPrayer] = useState('')
  const [praises, setPraises] = useState('')
  async function getAzkar() {
    try{
      let {data} = await axios.get(`https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json`)
      
      setDoha(data[`أدعية الأنبياء`][1].category)
      setwakingUprEminders(data[`أذكار الاستيقاظ`][1].category)
      setmorningRemembrance(data[`أذكار الصباح`][1].category)
      seteveningRemembrance(data[`أذكار المساء`][1].category)
      setremembranceOfSleep(data[`أذكار النوم`][1].category)
      setremembranceAfterGreetingFromPrayer(data[`أذكار بعد السلام من الصلاة المفروضة`][1].category)
      setPraises(data[`تسابيح`][1].category)

      
      
    }
    catch(err){
      
      
    }
   
    
  }
  function naviate(){
    x(`wakingup`)
  }
  function morning(){
    x(`morningremembrance`)
  }
  function evening(){
    x(`eveningremembrance`)
  }
  function sleep(){
    x(`remembranceofsleep`)
  }
  function afterPlayer(){
    x(`remembranceafterthegreeting`)
  }
  function praises2(){
    x(`praises`);
  }


  useEffect(() => {
    getAzkar()
  } ,[])
  
  return <>
{praises.length > 0 ?   <div className='awgat h-lvh'>
  <h1 className='text-center text-4xl font-bold amiri-regular text-emerald-600 pt-20 pb-8 '>الأذكار</h1>
  <div className='md:flex justify-center gap-9 items-center  md:p-5 '>

    <div>
      <h1  className='  rounded-lg shadow-lg box  shadow-slate-400 amiri-regular text-xl md:py-10 py-4 px-12 font-bold  m-1 text-center  hover:border-[#2CA4AB] transition-all border-green-500 cursor-pointer' onClick={naviate}>{wakingUpReminders}</h1>
    </div>
    <div>
      <h1 className=' shadow-lg box shadow-slate-400 rounded-lg amiri-regular text-xl md:py-10 py-4 px-12 font-bold m-1 text-center  hover:border-[#2CA4AB] transition-all border-green-500 cursor-pointer ' onClick={morning}>{morningRemembrance}</h1>
    </div>
    <div>
      <h1 className=' shadow-lg box shadow-slate-400 rounded-lg amiri-regular text-xl md:py-10 py-4 px-12 font-bold m-1 text-center  hover:border-[#2CA4AB] transition-all border-green-500 cursor-pointer' onClick={evening}>{eveningRemembrance}</h1>
    </div>
  
  </div>
  <div className='md:flex  justify-center gap-6 items-center  md:p-5'>
    <div>
      <h1 className=' rounded-lg box shadow-lg shadow-slate-400 amiri-regular text-xl md:py-10 py-4 px-10 font-bold m-1 text-center  hover:border-[#2CA4AB] transition-all border-green-500 cursor-pointer' onClick={sleep}>{remembranceOfSleep}</h1>
    </div>
    <div>
      <h1 className=' rounded-lg box shadow-lg shadow-slate-400 amiri-regular text-xl md:py-10 py-4 px-10 font-bold m-1 text-center  hover:border-[#2CA4AB] transition-all border-green-500 cursor-pointer' onClick={afterPlayer}>{remembranceAfterGreetingFromPrayer}</h1>
    </div>
    <div>
      <h1 className=' rounded-lg box shadow-lg shadow-slate-400 amiri-regular text-xl md:py-10 py-4 px-10 font-bold m-1 text-center  hover:border-[#2CA4AB] transition-all border-green-500 cursor-pointer' onClick={praises2}>{praises}</h1>
    </div>
  
  
  </div>
  </div> : <div class="loader"></div>}

  </>
}
