import React, { useState } from 'react'

const courses = [
    {
        id: 1,
        name: 'JavaScript'
    },
    {
        id: 2,
        name: 'React JS'
    },
    {
        id: 3,
        name: 'MySQL'
    }
]
function Radio() {
    const [checked, setChecked] = useState()

    const handleChange = () => {
        console.log({id : checked});
    }
  return (
    <div>
        <h3>radio:</h3>
        {courses.map((course) => {
            return (
                <div className="" key={course.id}>
                    <input 
                        type='radio'
                        id={course.name} 
                        onChange={() => setChecked(course.id)} 
                        checked = {checked === course.id}
                    />
                    <label htmlFor={course.name}>{course.name}</label>
                </div>
            )
        })}
        <button onClick={handleChange}>Submit</button>
    </div>
  )
}

export default Radio