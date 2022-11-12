import React from 'react'

const Certification = ({ logo, message } : { logo: string, message: string }) => {
    return (
        <div className='flex justify-center items-center'>
            <div className='inline-block justify-center items-center bg-red-50 rounded-3xl my-7'>
                <img className='w-[80vw] px-9 py-2' src={logo} alt={message}/>
                <p className='text-center text-5xl pb-4'>{message}</p>
            </div>
        </div>

    )
}

export default Certification