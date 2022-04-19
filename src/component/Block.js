import React from 'react'

export default function Block({...props}) {
  return (
    <div className=" p-4 bg-[#C4C4C4] rounded-xl">
      <img src={props.image} alt='img' className=" w-52 h-52 rounded-xl"/>
      <div className=" p-6">
        <label className=" text-3xl text-black">{props.text}</label>
      </div>
    </div>
  )
}
