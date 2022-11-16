import Image from 'next/image'
import styles from './page.module.css'
import { BsChevronDoubleDown } from 'react-icons/bs'
import Landing from '../components/homepage/Landing'
import TechIcon from '../components/homepage/TechIcon'
import Experience from '../components/homepage/Experience'
import Certification from '../components/homepage/Certification'
import Education from '../components/homepage/Education'
import Extracurricular from '../components/homepage/Extracurricular'
import Skill from '../components/homepage/Skill'

export default function Home() {
  // const skillsLink: string = window.document.getElementById('#SkillStack')?.getBoundingClientRect().top.toString()!

  // window.document.getElementById('#SkillsLink')!.style.marginTop = skillsLink ?? 132

  return (
    <div>
      <Landing scroll_message='Scroll for My Resume' />
      <div id='SkillsLink' className='p-2 absolute top-0 z-50 mt-[calc(100vh+34rem)]' />
      <div id='ExperienceLink' className='p-2 absolute top-0 z-50 mt-[calc(200vh+34rem)]' />
      <div id='CertificationsLink' className='p-2 absolute top-0 z-50 mt-[calc(300vh+34rem)]' />
      <div id='EducationLink' className='p-2 absolute top-0 z-50 mt-[calc(400vh+34rem)]' />
      <div id='ExtracurricularLink' className='p-2 absolute top-0 z-50 mt-[calc(500vh+34rem)]' />

      <div className='bg-[#f0e7e0] rounded-t-[10rem] custom-color_change'>
        <div className='flex justify-center items-center'>
          <img src={'/profile_pic.png'} alt="Kelly's Profile Picture" className='top-0 w-72 rounded-full border-white border-8 border-spacing-10 mt-40 mb-24' />
        </div>

        <div className='sticky top-[4rem]'>
          <a id='SkillStack' href='#SkillsLink' className='custom-manilla-header'>Skills Stack</a>
          <div className='text-center h-[100%] custom-manilla-folder'>

            <Skill 
              skillName='CAD Drafting'
              color='#cae2ef'
              flexElement={
                <div className='flex'>
                  <TechIcon tech_skill='Formit Pro' icon_pic='/skills/formit_logo.png' />
                  <TechIcon tech_skill='AutoCAD' icon_pic='/skills/autocad_logo.png' />
                  <TechIcon tech_skill='Revit' icon_pic='/skills/revit_logo.png' />
                  <TechIcon tech_skill='ArchiCAD' icon_pic='/skills/archicad_logo.png' />
                  <TechIcon tech_skill='SketchUp' icon_pic='/skills/sketchup_logo.svg' />
                </div>
              }
            />

            <Skill
              skillName='3D Rendering'
              color='#ddcaef'
              flexElement={
                <div className='flex'>
                  <TechIcon tech_skill='D5 Render' icon_pic='/skills/d5_logo.png' />
                  <TechIcon tech_skill='Lumion' icon_pic='/skills/lumion_logo.svg' />
                  <TechIcon tech_skill='Enscape' icon_pic='/skills/enscape_logo.png' />
                </div>
              }
            />

            <Skill
              skillName='Adobe Creative Cloud'
              color='#caefe1'
              flexElement={
                <div className='flex'>
                  <TechIcon tech_skill='Photoshop' icon_pic='/skills/photoshop_logo.svg' />
                  <TechIcon tech_skill='Illustrator' icon_pic='/skills/illustrator_logo.svg' />
                  <TechIcon tech_skill='InDesign' icon_pic='/skills/indesign_logo.svg' />
                </div>
              }
            />

          </div>
        </div>


        <div className='sticky top-[8rem] mt-[-4rem]'>
          <a href='#ExperienceLink' className='custom-manilla-header'>Experience</a>
          <div className='h-[95%] custom-inner_bottom_shadow custom-manilla-folder'>
            <Experience job_icon='/experience/provectus_logo.png' accessability='Provectus Inc Logo' />
          </div>
        </div>

        <div className='sticky top-[12rem] mt-[-4rem]'>
          <a href='#CertificationsLink' className='custom-manilla-header'>Certifications</a>
          <div className='h-[90%] custom-inner_bottom_shadow custom-manilla-folder'>
            <Certification logo='/certification/osha.svg' message='OSHA 10 Certification | 2019' />

          </div>
        </div>

        <div className='sticky top-[16rem] mt-[-4rem]'>
          <a href='#EducationLink' className='custom-manilla-header'>Education</a>
          <div className='h-[85%] custom-inner_bottom_shadow custom-manilla-folder'>
            <Education logo='/education/morrisville.svg' title='SUNY Morrisville' message='example' />

          </div>
        </div>

        <div className='sticky top-[20rem] mt-[-4rem]'>
          <a href='#ExtracurricularLink' className='custom-manilla-header'>Leadership | Extracurriculars</a>
          <div className='h-[80%] custom-inner_bottom_shadow custom-manilla-folder'>
            <Extracurricular curricular='Morrisville Tutoring' position='Peer Tutor' message='asdf' />
          </div>
        </div>

        <div className='sticky top-[32rem] bg-black'>
          <div className='h-1/6'>
            <button>View Portfolio</button>
            <button>Contact Me</button>
          </div>
        </div>
      </div>


    </div >


    // 3 Buttons to proceed to resume, portfolio and contact
  )
}
