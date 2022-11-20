import styles from './page.module.css'
import { BsChevronDoubleDown } from 'react-icons/bs'

const Landing = ({ scroll_message }: { scroll_message: string }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center h-[calc(100vh-8rem)] w-[80%] border-[0.5rem] rounded-[80px]">
        <div className="leading-none w-full">
          <h1 className="text-[15vmin] items-center justify-center flex">
            Kelly <br/> Crane
          </h1>
          <div className="text-[4vmin] items-center justify-center flex whitespace-nowrap mt-10">
            <p id="aspiring-fade" className='custom-fade'>Aspiring&nbsp;</p>
            <p id="architect-fade" className='custom-fade w-0'>Architect</p>
            <p id="civil-fade" className='custom-fade w-0'>Civil Engineer</p>
            <p id="student-fade" className='custom-fade -ml-[6.3ch]'>Duel Degree Student</p>
          </div>
        </div>
      </div>
      <p className="flex absolute bottom-0 items-center mb-4 text-[2vh] text-gray-600">
        <BsChevronDoubleDown className="animate-bounce" />
        &nbsp;&nbsp;&nbsp;&nbsp;
        {scroll_message}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <BsChevronDoubleDown className="animate-bounce" />
      </p>
    </div>
  )
}

export default Landing
