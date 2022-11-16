import React from 'react'
import { useEffect } from 'react'
import TechIcon from './TechIcon'
import flashcard from '../../public/skills/flashcard.png'
import { Architects_Daughter } from '@next/font/google'


const archiFont = Architects_Daughter({ weight: '400' })

const Skill = ( { skillName, color, rotateDeg, flexElement }:
  { skillName: string, color: string, rotateDeg: number, flexElement: JSX.Element }
) => {
  return (
    <div
      style={{
        background: `url(${flashcard.src}), ${color}`,
        transform: `rotate(${rotateDeg}deg)`
      }}
      className='inline-block p-3 m-5 rounded-b-[4rem] rounded-tr-[4rem] shadow-lg'
    >

      <h2
        className='inline-block text-left text-4xl mb-4 p-3 bg-white rounded-3xl border-black border-[1px]'>
        {skillName}
      </h2>

      <div className={archiFont.className}>{flexElement}</div>
    </div>
  )
}

export default Skill