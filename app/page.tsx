import Image from 'next/image'
import styles from './page.module.css'
import Landing from '../components/homepage/Landing'
import TechIcon from '../components/homepage/TechIcon'
import Experience from '../components/homepage/Experience'
import Certification from '../components/homepage/Certification'
import Education from '../components/homepage/Education'
import Extracurricular from '../components/homepage/Extracurricular'
import Skill from '../components/homepage/Skill'

// TODO: OnClick smooth scroll to folder header
export default function Home() {
  return (
    <div>
      <Landing scroll_message='Scroll for My Resume' />
      <div id='SkillsLink' className='10sp-2 absolute top-0 z-50 mt-[calc(100vh+30rem)]' />
      <div id='ExperienceLink' className='10sp-2 absolute top-0 z-50 mt-[calc(200vh+26rem+7vmin)]' />
      <div id='CertificationsLink' className='10sp-2 absolute top-0 z-50 mt-[calc(294vh+22rem+14vmin)]' />
      <div id='EducationLink' className='10sp-2 absolute top-0 z-50 mt-[calc(384vh+18rem+21vmin)]' />
      <div id='ExtracurricularLink' className='10sp-2 absolute top-0 z-50 mt-[calc(468vh+14rem+28vmin)]' />

      <div className='bg-[#f0e7e0] rounded-t-[20vmin] custom-color_change'>
        <div className='flex justify-center items-center'>
          <Image
            src={'/images/profile_pic.png'} alt="Kelly's Profile Picture"
            width={500} height={500} placeholder="blur"
            blurDataURL="|LHdEI5lNEE3-WI;=tIps:}9IpNL-nM{R,NxoyxC-UNbEhxGs:kB%1njIpenRkxtjZs9jEIq%1ShxZofR-jEkCo#NHnhxZn+ofoIRkoMs-n$WCkCV@R-xGocS2bIa#aeW;oJf+s:ahRkbFs:j[aznjWCWBoeflWCsmWVW;"
            className='top-0 w-72 rounded-full border-white border-8 border-spacing-10 mt-24 mb-24'
          />
        </div>

        <div className='sticky top-[4rem]'>
          <a id='SkillStack' href='#SkillsLink' className='custom-manilla-header'>Skills Stack</a>
          <div className='text-center h-full custom-manilla-folder'>

            <Skill 
              skillName='CAD Drafting'
              color='#edf6fe'
              rotateDeg={1}
              flexElement={
                <div className='flex'>
                  <TechIcon tech_skill='Formit Pro' icon_pic='/images/skills/formit_logo.png' />
                  <TechIcon tech_skill='AutoCAD' icon_pic='/images/skills/autocad_logo.png' />
                  <TechIcon tech_skill='Revit' icon_pic='/images/skills/revit_logo.png' />
                  <TechIcon tech_skill='ArchiCAD' icon_pic='/images/skills/archicad_logo.png' />
                  <TechIcon tech_skill='SketchUp' icon_pic='/images/skills/sketchup_logo.svg' />
                </div>
              }
            />
            <Skill
              skillName='3D Rendering'
              color='#f8edff'
              rotateDeg={-3}
              flexElement={
                <div className='flex'>
                  <TechIcon tech_skill='D5 Render' icon_pic='/images/skills/d5_logo.png' />
                  <TechIcon tech_skill='Lumion' icon_pic='/images/skills/lumion_logo.svg' />
                  <TechIcon tech_skill='Enscape' icon_pic='/images/skills/enscape_logo.png' />
                </div>
              }
            />
            <Skill
              skillName='Adobe Creative Cloud'
              color='#edfef7'
              rotateDeg={-1}
              flexElement={
                <div className='flex'>
                  <TechIcon tech_skill='Photoshop' icon_pic='/images/skills/photoshop_logo.svg' />
                  <TechIcon tech_skill='Illustrator' icon_pic='/images/skills/illustrator_logo.svg' />
                  <TechIcon tech_skill='InDesign' icon_pic='/images/skills/indesign_logo.svg' />
                </div>
              }
            />

          </div>
        </div>


        <div className='sticky top-[calc(4rem+7vmin)] mt-[-4rem]'>
          <a href='#ExperienceLink' className='custom-manilla-header'>Experience</a>
          <div className='h-[95%] custom-inner_bottom_shadow custom-manilla-folder'>
            <Experience
              jobIcon='/images/experience/provectus_logo.png'
              accessability='Provectus Inc Logo'
              folderColor='#554c79'
              experienceElement={
                <ul>
                  <li>fgfsgfgg</li>
                  <li>fdasasdf</li>
                  <li>fdffdfdfdf</li>
                  <li>mmmmmmmmmm</li>
                </ul>
              }
            />
          </div>
        </div>

        <div className='sticky top-[calc(4rem+14vmin)] mt-[-4rem]'>
          <a href='#CertificationsLink' className='custom-manilla-header'>Certifications</a>
          <div className='h-[90%] custom-inner_bottom_shadow custom-manilla-folder'>
            <Certification logo='/images/certification/osha.svg' message='OSHA 10 Certification | 2019' />

          </div>
        </div>

        <div className='sticky top-[calc(4rem+21vmin)] mt-[-4rem]'>
          <a href='#EducationLink' className='custom-manilla-header'>Education</a>
          <div className='h-[85%] custom-inner_bottom_shadow custom-manilla-folder'>
            <Education logo='/images/education/morrisville.svg' title='SUNY Morrisville' message='example' />

          </div>
        </div>

        <div className='sticky top-[calc(4rem+28vmin)] mt-[-4rem]'>
          <a href='#ExtracurricularLink' className='custom-manilla-header'>Leadership | Extracurriculars</a>
          <div className='h-[80%] custom-inner_bottom_shadow custom-manilla-folder'>
            <Extracurricular curricular='Morrisville Tutoring' position='Peer Tutor' message='asdf' />
          </div>
        </div>

        <div className='sticky top-[calc(4rem+35vmin)] bg-black'>
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
