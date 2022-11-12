import React from 'react'

const Education = ({ logo, title, message }: { logo: string, title: string, message: string }) => {
    return (
        <div className='p-16'>
            <div className='flex bg-green-100'>
                <img className='w-[20%]' src={logo} alt={message} />
                <div className='justify-center items-center text-center w-full'>
                    <h2 className=''>{title}</h2>
                    <p>{message}</p>
                </div>
            </div>
        </div>
    )
}

export default Education