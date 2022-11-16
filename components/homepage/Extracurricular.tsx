import React from 'react'

const Extracurricular = ({ curricular, position, message }: { curricular: string, position: string, message: string } ) => {
    return (
        <div>
            <h2><strong>{curricular}</strong> | {position}</h2>
            <p>{message}</p>
        </div>
    )
}

export default Extracurricular