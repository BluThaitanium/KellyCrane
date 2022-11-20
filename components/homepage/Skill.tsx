import React from 'react'
import { useEffect } from 'react'
import flashcard from '../../public/images/skills/flashcard.png'
import { Architects_Daughter } from '@next/font/google'

const archiFont = Architects_Daughter({ weight: '400', subsets: ['latin'] })

const Skill = ({
  skillName,
  color,
  rotateDeg,
  flexElement,
}: {
  skillName: string
  color: string
  rotateDeg: number
  flexElement: JSX.Element
}) => {
  return (
    <div
      style={{
        background: `url(${flashcard.src}), ${color}`,
        backgroundSize: `auto 100%`,
        transform: `rotate(${rotateDeg}deg)`,
      }}
      className="inline-block p-[1vmin] m-[2vmin] rounded-b-[6vmin] rounded-tr-[6vmin] shadow-lg"
    >
      <h2 className="inline-block text-left mb-4 p-[1vmin] bg-white rounded-2xl border-black border-[1px]">
        {skillName}
      </h2>

      <div className={archiFont.className}>{flexElement}</div>
    </div>
  )
}

export default Skill
