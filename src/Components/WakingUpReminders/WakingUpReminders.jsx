import React, { useEffect, useState } from "react";
import style from "./WakingUpReminders.module.css";
import axios from "axios";
export default function WakingUpReminders() {
  const [wakingTime, setWakingTime] = useState([]);
  async function getWakingTime() {
    try {
      let { data } = await axios.get(
        `https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json`
      );
      
      setWakingTime(data[`أذكار الاستيقاظ`])
    } catch (err) {
      
    }
  }

  useEffect(() => {
    getWakingTime();
  }, []);

  return (
    <>
  <div className="awgat h-lvh">
  <h1 className="text-center amiri-regular text-4xl font-bold text-emerald-600 pt-24 pb-8 ">
        أذكار الأستيقاظ
      </h1>
      {wakingTime.length > 0 ? <div className="flex flex-col items-left justify-center md:ps-20 ps-4 ">
       {wakingTime.map((time) => <h1 className="amiri-regular text-2xl p-5"  key={time.content}>
        {time.content}  <span>({time.count})</span>
       </h1>)}
      </div> : "loading......."}
  </div>
    </>
  );
}
