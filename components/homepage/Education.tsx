import React from 'react'
import Image  from 'next/image'

const Education = ({ logo, title, message }: { logo: string, title: string, message: string }) => {
    return (
        <div className='p-16'>
            <div className='flex bg-green-100'>
                <Image
                    src={logo} alt={message} width={400} height={400}
                    className='w-[20%]'
                />
                <div className='justify-center items-center text-center w-full'>
                    <h2 className=''>{title}</h2>
                    <p>{message}</p>
                </div>
            </div>
        </div>
    )
}

export default Education