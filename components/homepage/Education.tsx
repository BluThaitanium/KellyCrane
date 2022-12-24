import React from 'react'
import Image from 'next/image'
import { Pirata_One } from '@next/font/google'

const pirata = Pirata_One({ weight: '400', subsets: ['latin'] })

// import localFont from '@next/font/local'

// const pirata = localFont({
//   src: '../../public/fonts/CloisterBlack.woff2',
//   weight: '400',
// //   subsets: ['latin'],
// })

const Education = ({
  university,
  logo,
  degree,
  degreeMonth,
  degreeYear,
  major,
}: {
  university: string
  logo: string
  degree: string
  degreeMonth: string
  degreeYear: string
  major: string
}) => {
  return (
    <div className="bg-[#F0EEE9] w-[90vmin] h-[57vmin] mx-auto py-[2vmin] border-[2vmin] border-x-yellow-800 border-y-orange-900">
      <div className="text-center w-full">
        <h2 className={`${pirata.className} text-[7vmin] leading-tight`}>{university}</h2>
        <div className="flex justify-center items-center text-center">
          <p className="text-[4vmin]">{degreeMonth}</p>
          <Image
            src={logo}
            alt={degree}
            width={400}
            height={400}
            className="w-[20%] mx-[5vmin]"
          />
          <p className="text-[4vmin]">{degreeYear}</p>
        </div>
        <p className="text-[6vmin]">{degree}</p>
        <p className="text-[5vmin]">{major}</p>
      </div>
    </div>
  )
}

export default Education
