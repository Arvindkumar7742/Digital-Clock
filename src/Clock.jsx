import React, { useRef, useState } from 'react'

export const Clock = () => {

    const [digitalTime,setDigitalTime] = useState("");

    setInterval(()=>{
        let time = new Date();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds()<10 ? "0" +time.getSeconds() : time.getSeconds() ;
        let milliSeconds = time.getMilliseconds()<10 ? "00" + time.getMilliseconds() :
         time.getMilliseconds()<100 ? "0" + time.getMilliseconds() : time.getMilliseconds();
        let timeZone = time.getHours()<=11 ? "AM" : "PM"; 
        setDigitalTime({
            hours,minutes,seconds,milliSeconds,timeZone
        })

    },10);
  return (
    <div className='h-full my-auto flex justify-center items-center gap-2 text-[200px]'>
        <div>{digitalTime.hours}: </div>
        <div>{digitalTime.minutes}: </div>
        <div>{digitalTime.seconds}</div>
    </div>
  )
}
