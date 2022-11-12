import Image from 'next/image'
import Hero from '../components/Landing'
import styles from './page.module.css'
import { BsChevronDoubleDown } from 'react-icons/bs'
import Landing from '../components/Landing'
import TechIcon from '../components/TechIcon'
import Experience from '../components/Experience'
import Certification from '../components/Certification'
import Education from '../components/Education'
import Extracurricular from '../components/Extracurricular'

export default function Home() {
  try { window } catch (err) {
    console.log("Oops, `window` is not defined")
  }
  // const skillsLink: string = window.document.getElementById('#SkillStack')?.getBoundingClientRect().top.toString()!

  // window.document.getElementById('#SkillsLink')!.style.marginTop = skillsLink ?? 132

  return (
    <div>
      <Landing scroll_message='Scroll for My Resume' />
      <div id='SkillsLink' className='p-2 absolute top-0 z-50 mt-[calc(100vh+34rem)]'/>
      <div id='ExperienceLink' className='p-2 absolute top-0 z-50 mt-[calc(200vh+34rem)]'/>
      <div id='CertificationsLink' className='p-2 absolute top-0 z-50 mt-[calc(300vh+34rem)]'/>
      <div id='EducationLink' className='p-2 absolute top-0 z-50 mt-[calc(400vh+34rem)]'/>
      <div id='ExtracurricularLink' className='p-2 absolute top-0 z-50 mt-[calc(500vh+34rem)]'/>

      <div className='bg-gray-300 rounded-t-[10rem] custom-color_change'>
        <div className='flex justify-center items-center'>
          <img src={'/profile_pic.png'} alt="Kelly's Profile Picture" className='top-0 w-72 rounded-full border-white border-8 border-spacing-10 mt-40 mb-24' />
        </div>

        <div className='sticky top-[4rem]'>
          <a id='SkillStack' href='#SkillsLink' className='inline-block pl-10 pr-8 -mx-5 text-6xl bg-white rounded-tr-full -mb-1 transform transition hover:scale-90'>Skills Stack</a>
          <div className='text-center bg-white pt-8 pb-16 h-[100%]'>

            <div className='inline-block bg-blue-300 p-3 m-5 rounded-b-[4rem] rounded-tr-[4rem]'>
              <h2 className='inline-block text-left text-4xl mb-4 p-3 bg-white rounded-3xl'>CAD Drafting</h2>
              <div className='flex'>
                <TechIcon tech_skill='Formit Pro' icon_pic='/skills/formit_logo.png' />
                <TechIcon tech_skill='AutoCAD' icon_pic='/skills/autocad_logo.png' />
                <TechIcon tech_skill='Revit' icon_pic='/skills/revit_logo.png' />
                <TechIcon tech_skill='ArchiCAD' icon_pic='/skills/archicad_logo.png' />
                <TechIcon tech_skill='SketchUp' icon_pic='/skills/sketchup_logo.svg' />
              </div>
            </div>

            <div className='inline-block bg-purple-300 p-3 m-5 rounded-b-[4rem] rounded-tr-[4rem]'>
              <h2 className='inline-block text-left text-4xl mb-4 p-3 bg-white rounded-3xl'>3D Rendering</h2>
              <div className='flex'>
                <TechIcon tech_skill='D5 Render' icon_pic='/skills/d5_logo.png' />
                <TechIcon tech_skill='Lumion' icon_pic='/skills/lumion_logo.svg' />
                <TechIcon tech_skill='Enscape' icon_pic='/skills/enscape_logo.png' />
              </div>
            </div>

            <div className='inline-block bg-red-300 p-3 m-5 rounded-b-[4rem] rounded-tr-[4rem]'>
              <h2 className='inline-block text-left text-4xl mb-4 p-3 bg-white rounded-3xl'>Adobe Creative Cloud</h2>
              <div className='flex'>
                <TechIcon tech_skill='Photoshop' icon_pic='/skills/photoshop_logo.svg' />
                <TechIcon tech_skill='Illustrator' icon_pic='/skills/illustrator_logo.svg' />
                <TechIcon tech_skill='InDesign' icon_pic='/skills/indesign_logo.svg' />
              </div>
            </div>

          </div>
        </div>


        <div className='sticky top-[8rem] mt-[-4rem]'>
          <a href='#ExperienceLink' className='inline-block pl-10 pr-8 -mx-5 text-6xl bg-white rounded-tr-full -mb-1 transform transition hover:scale-90'>Experience</a>
          <div className='bg-white pt-8 pb-16 h-[95%] custom-inner_bottom_shadow'>
            <Experience job_icon='/experience/provectus_logo.png' accessability='Provectus Inc Logo' />
          </div>
        </div>

        <div className='sticky top-[12rem] mt-[-4rem]'>
          <a href='#CertificationsLink' className='inline-block pl-10 pr-8 -mx-5 text-6xl bg-white rounded-tr-full -mb-1 transform transition hover:scale-90'>Certifications</a>
          <div className='bg-white pt-8 pb-16 h-[90%] custom-inner_bottom_shadow'>
            <Certification logo='/certification/osha.svg' message='OSHA 10 Certification | 2019' />

          </div>
        </div>

        <div className='sticky top-[16rem] mt-[-4rem]'>
          <a href='#EducationLink' className='inline-block pl-10 pr-8 -mx-5 text-6xl bg-white rounded-tr-full -mb-1 transform transition hover:scale-90'>Education</a>
          <div className='bg-white pt-8 pb-16 h-[85%] custom-inner_bottom_shadow'>
            <Education logo='/education/morrisville.svg' title='SUNY Morrisville' message='example' />

          </div>
        </div>

        <div className='sticky top-[20rem] mt-[-4rem]'>
          <a href='#ExtracurricularLink' className='inline-block pl-10 pr-8 -mx-5 text-6xl bg-white rounded-tr-full -mb-1 transform transition hover:scale-90'>Leadership | Extracurriculars</a>
          <div className='bg-white pt-8 pb-16 h-[80%] custom-inner_bottom_shadow'>
            <Extracurricular curricular='Morrisville Tutoring' position='Peer Tutor' message='asdf'/>
          </div>
        </div>

        <div className='sticky top-[32rem] bg-black'>
          <div className='h-1/6'>
              <button>View Portfolio</button>
          </div>
        </div>
      </div>


    </div>


    // 3 Buttons to proceed to resume, portfolio and contact
  )
}
