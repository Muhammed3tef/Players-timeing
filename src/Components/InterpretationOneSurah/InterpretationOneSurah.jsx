import React, { useEffect, useState } from "react";
import style from "./InterpretationOneSurah.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function InterpretationOneSurah() {
  const [interpre, setInterpre] = useState([]);
  let { id } = useParams();

  async function getInter() {
    let {data} = await axios.get(
      `https://quranenc.com/api/v1/translation/sura/arabic_moyassar/${id}`
    );
    console.log(data);
    setInterpre(data.result);
  }

  useEffect(() => {
    getInter(id);
  }, []);
  return (
    <>
{interpre.length > 0 ? <div className="awgat">
<h1 className="text-center amiri-regular text-4xl font-bold text-emerald-600 pt-24 pb-8 ">
        تفسير السورة
      </h1>
      {interpre.length > 0 ? (
        <div className="flex flex-col items-left justify-center md:ps-10  ps-4 ">
          {interpre.map((inter) => (
            <div className="amiri-regular text-2xl p-4">
              <h1 className="text-red-600">"{inter.arabic_text}"</h1>
              <h2 className="py-2 pt-3 ">{inter.translation}</h2>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
</div> : <div class="loader"></div>}
    </>
  );
}
