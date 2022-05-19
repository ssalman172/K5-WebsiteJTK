import "../App.css";
import React, { useState } from "react";
import Calendar from "react-calendar";

const Agenda = () => {
  const [value, setValue] = useState(new Date());

  const onChange = (nextValue) => {
    setValue(nextValue);
  };

  return (
    <div className="flex mx-[2%] my-[3%] h-[80vh] items-center font-lora">
      <div className="flex justify-center items-center w-3/5 bg-[#1A2C43] h-[90%] p-5">
        <Calendar
          className="text-white text-2xl font-bold"
          onChange={onChange}
          value={value}
        />
      </div>
      <div className="w-2/5 bg-[#D65D0E] h-full pl-5 pt-5 pr-7">
        <div className="flex">
          <img src="/img/icons/agenda/left-arrow.png" className="w-8 h-8 mr2" />
          <img src="/img/icons/agenda/right-arrow.png" className="w-8 h-8" />
        </div>
        <div className="flex flex-col items-end">
          <p className="text-white text-9xl font-bold mb3">18</p>
          <p className="text-8xl font-semibold mb3">Sabtu</p>
          <p className="text-5xl font-semibold mb3">Juni 2022</p>
          <div className="flex flex-col items-end overflow-y-auto h-[20vh]">
            <a href="#" className="text-white text-2xl hover:underline">
              Pertemuan Wali Murid 08.00 - 14.00
            </a>
            <a href="#" className="text-white text-2xl hover:underline">
              Penerimaan Mahasiswa Baru 2022
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
