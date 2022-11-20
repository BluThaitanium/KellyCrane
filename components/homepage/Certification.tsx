import React from 'react'
import Image from 'next/image'

const Certification = ({ logo, message } : { logo: string, message: string }) => {
    return (
        <div className='flex justify-center items-center'>
            <div className='inline-block justify-center items-center bg-red-50 rounded-3xl my-7'>
                <Image
                    src={logo} alt={message} width={400} height={400}
                    className='w-[80vw] px-9 py-2'
                />
                <p className='text-center text-[6vmin] pb-4'>{message}</p>
            </div>
        </div>

    )
}

export default Certification