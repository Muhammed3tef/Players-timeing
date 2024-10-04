import React, { useEffect, useState } from "react";
import style from "./QuranKarimRadio.module.css";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";

export default function QuranKarimRadio() {
  const [quran, setQuran] = useState([]);
  async function getQuran() {
    let { data } = await axios.get(`https://data-rosy.vercel.app/radio.json`);
    console.log(data.radios);
    setQuran(data.radios);
  }

  useEffect(() => {
    getQuran();
    document.title = "أذاعات القرأن الكريم"
  }, []);
  return (
    <>
<div className="awgat">
<h1 className="text-center amiri-regular text-4xl font-bold text-emerald-600 pt-24 pb-8 ">
        أذاعه القرأن الكريم
      </h1>
    <div className="container">
      <div className="row">
      {quran.map((qur) =>   <Link to={`${qur.url}`} className="w-full p-5  md:w-1/2 lg:w-1/4 xl:w-1/6">
        {qur.id != "15" ?  <div className="cursor-pointer  tess overflow-hidden rounded-lg">
        <div className="overflow-hidden">
        <img src={`${qur.img}`} className="h-[300px] object-cover transition-all rounded-lg" alt="image not fount yet"/>
        </div>
        <h2 className="amiri-regular text-center  py-3">{qur.name}</h2>
        {/* <Link to={`${qur.url}`}></Link> */}
        </div> : null}
          </Link>)}
      </div>
    </div>
</div>
    </>
  );
}
