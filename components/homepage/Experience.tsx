import React from 'react'
import Image from 'next/image'

const Experience = ({job_icon, accessability}: {job_icon: string, accessability: string}) => {
    return (
        <div>
            <div className='flex p-9 w-full justify-center items-center'>
                <div className='bg-purple-300 w-11/12 rounded-3xl'>
                    <Image
                        src={job_icon} alt={accessability}
                        width={400} height={400}
                    />
                    <ul>
                        <li>asdf</li>
                        <li>fdasasdf</li>
                        <li>fdffdfdfdf</li>
                        <li>mmmmmmmmmm</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience