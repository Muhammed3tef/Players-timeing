import React, { useEffect, useState } from "react";
import style from "./Surah.module.css";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import bsm from "../../assets/bsm.jpg";
import { IoClose } from "react-icons/io5";
import Koran from "../Koran/Koran";
export default function Surah() {
  const [specifcSurah, setSpecifcSurah] = useState([]);
  const [audio, setAudio] = useState([]);
  let navigate = useNavigate();
  let { id } = useParams();
  async function getSurah() {
    let { data } = await axios.get(`https://api.alquran.cloud/v1/surah/${id}`);

    setSpecifcSurah(data.data.ayahs);
  }
  async function getAudio() {
    let { data } = await axios.get(
      `https://api.quran.com/api/v4/chapter_recitations/5`
    );
    console.log(data.audio_files);
    setAudio(data.audio_files);
  }
  function naveg() {
    navigate(`/koran`);
  }

  useEffect(() => {
    getSurah();
    getAudio();
  }, []);

  return (
    <>
      <div className="awgat ">
        {specifcSurah.length > 0 ? (
          <div className="pt-20 text-center  p-4">
            <IoClose className="text-2xl cursor-pointer ms-2" onClick={naveg} />
            
            {specifcSurah.map((surah) => (
              <div className="md:text-2xl   p-2" key={surah.number}>
                {surah.text}
                <span>({surah.numberInSurah})</span>
                <div className="h-1 m-1 bg-green-500"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="loader"></div>
        )}
      </div>
    </>
  );
}
