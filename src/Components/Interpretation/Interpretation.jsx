import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Interpretation() {
  const [koran, setKoran] = useState([]);

  async function getKoran() {
    let { data } = await axios.get(`https://api.alquran.cloud/v1/surah`);
    
    setKoran(data.data);
  }

  useEffect(() => {
    getKoran();
  }, []);

  return (
    <>
      <h1 className="text-center text-4xl font-bold awgat text-emerald-600 pt-20 pb-8">
        التفسير

      </h1>
      {/* {koran.length > 0 ? (
        <div className="container">
          <div className="row">
            {koran.map((kor) => (
              <Link to={`/surah/${kor.number}/${kor.englishName}`} className="w-full md:w-1/5 lg:w-1/6 " key={kor.number} >
                <div className="border-2 rounded-lg py-2 m-1 text-center hover:border-[#2CA4AB] transition-all border-green-500 cursor-pointer">
                  <h1>{kor.name}</h1>
                  <h2>Al-Faatiha</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        "loading"
      )} */}
  {koran.length > 0 ? (
        <div className="container awgat">
          <div className="row ">
            {koran.map((kor) => (
              <Link to={`interpretationonesurah/${kor.number}`} className="w-full md:w-1/5 lg:w-1/3  " key={kor.number} >
                <div className="border-2 rounded-lg flex justify-between items-center py-2 m-1 text-center  hover:border-[#2CA4AB] transition-all border-green-500 cursor-pointer">
                    <div className="flex flex-col items-start ps-4 amiri-regular ">
                    <h1>{kor.name}</h1>
                    <h2 >{kor.englishName}</h2>
                    </div>
                    <div>
                      <h1 className="p-3 amiri-regular">{kor.numberOfAyahs}<span className="ps-1">اَيه</span></h1>
                    </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="loader"></div>
      )}
    </>
  );
}
