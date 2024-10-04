import React from 'react'
import style from "./Home.module.css"
import "../../index.css"
import background from "../../assets/background.jpg"
import { Link } from 'react-router-dom'
export default function Home() {
  

  
  return <>
    <div className='test p-14  text-white  flex flex-col justify-center'>
      <h1 className=' md:ps-40  md:text-right text-center  md:text-5xl text-3xl  amiri-regular '>مرحبا بك</h1>
      <h1 className=' md:ps-40 pt-5  md:text-right text-center  md:text-5xl text-3xl amiri-regular '>في موقع الفوز بالجنة</h1>
      
<Link to="prayertimes" className="button md:right-40 right-20 top-14 amiri-regular " >
 أبدأ التصفح  
  <div className="arrow">›</div>
</Link>

    </div>
  </>
}
