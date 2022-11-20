import React from 'react'
import Image from 'next/image'

const Experience = ({
  jobIcon,
  accessability,
  folderColor,
  experienceElement,
}: {
  jobIcon: string
  accessability: string
  folderColor: string
  experienceElement: JSX.Element
}) => {
  return (
    <div className="w-full block">
      <Image
        src={jobIcon} alt={accessability}
        width={400} height={400}
        style={{ backgroundColor: `${folderColor}` }}
        className="custom-folder-header"
      />
      <div
        className="custom-folder-folder"
        style={{ backgroundColor: `${folderColor}` }}
      >
        <div className="custom-folder-paper">
          {experienceElement}
        </div>
      </div>
    </div>
  )
}

export default Experience
