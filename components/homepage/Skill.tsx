import React from 'react'
import { useEffect } from 'react'
import TechIcon from './TechIcon'


const Skill = ( { skillName, color, flexElement }:
  { skillName: string, color: string, flexElement: JSX.Element }
) => {
  return (
    <div
      style={{backgroundColor: color}}
      className='inline-block p-3 m-5 rounded-b-[4rem] rounded-tr-[4rem]'
    >

      <h2
        className='inline-block text-left text-4xl mb-4 p-3 bg-[#ffecd0] rounded-3xl'>
        {skillName}
      </h2>

      {flexElement}
    </div>
  )
}

export default Skill