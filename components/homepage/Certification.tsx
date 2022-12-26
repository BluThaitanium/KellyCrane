import React from 'react'
import Image from 'next/image'

const Certification = ({ logo, message } : { logo: string, message: string }) => {
    return (
        <div className='flex justify-center items-center'>
            <div className='inline-block justify-center items-center w-[85vmin] h-[33vmin] p-2 rounded-3xl my-7 custom-brushed-metal'>
                <div className='relative justify-center items-center m-auto w-[95%] h-[98%] rounded-3xl'>
                    <Image
                        src={logo} alt={message} width={400} height={400}
                        className='w-[80vw] px-9 py-2'
                    />
                    <p className='text-center text-[6vmin] pb-4'>{message}</p>
                </div>
            </div>
        </div>

    )
}

export default Certification