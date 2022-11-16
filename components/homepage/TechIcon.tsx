import React from 'react'

const TechIcon = ({tech_skill, icon_pic}: {tech_skill: string, icon_pic: string}) => {
    return (
        <div className='m-2 w-[10rem] max-w-[10rem] justify-center items-center text-center'>
            <img className='w-full h-[10rem] max-h-[10rem]' src={icon_pic} alt={tech_skill}/>
            <p className='text-3xl mt-2'>{tech_skill}</p>
        </div>
    )
}

export default TechIcon