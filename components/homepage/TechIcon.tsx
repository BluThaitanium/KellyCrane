import React from 'react'
import Image from 'next/image'

const TechIcon = ({tech_skill, icon_pic}: {tech_skill: string, icon_pic: string}) => {
    return (
        <div className='w-[min(12vmax,16vmin)] justify-center items-center text-center mx-[1vmin]'>
            <Image
                src={icon_pic} alt={tech_skill}
                width={400} height={400}
                className='h-[min(12vmax,16vmin)]'
            />
            <p className='text-[min(1.8vmax,3vmin)] mt-2'>{tech_skill}</p>
        </div>
    )
}

export default TechIcon