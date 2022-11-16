import Image from 'next/image'
import Hero from './Landing'
import styles from './page.module.css'
import { BsChevronDoubleDown } from 'react-icons/bs'

const Landing = ({scroll_message}: {scroll_message: string}) => {
  return (
    <div className='flex justify-center items-center h-screen'>

      <div className='flex justify-center items-center h-[85%] w-[80%] border-8 rounded-[10rem]'>
        <div>
          <h1 className='text-9xl'>
            Kelly<br/>Crane
          </h1>
          <p>Aspiring Architect & Civil Engineering Student</p>
        </div>
      </div>
      <p className='flex absolute bottom-0 items-center mb-4 text-[2vh] text-gray-400'>
        <BsChevronDoubleDown className='animate-bounce'/>
        &nbsp;&nbsp;&nbsp;&nbsp;
        {scroll_message}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <BsChevronDoubleDown className='animate-bounce'/>
      </p>
    </div>
  )
}

export default Landing