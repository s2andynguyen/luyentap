import React, { useState } from 'react';

const courses = [
    {
        id: 1,
        name: 'JavaScript',
    },
    {
        id: 2,
        name: 'React JS',
    },
    {
        id: 3,
        name: 'MySQL',
    },
];

function Checkbox() {
    const [checked, setChecked] = useState([]);
    const handleCheck = (id) => {
        setChecked((prevState) => {
            const isCheck = checked.includes(id);
            if (isCheck) {
                return checked.filter(item => item!==id)
            } else {
                return [...prevState, id];
            }
        });
    };
    const handleSubmit = () => {
        console.log({ list: checked });
    };
    return (
        <div>
            <h3>Checkbox:</h3>
            {courses.map((course) => {
                return (
                    <div className="" key={course.id}>
                        <input
                            type="checkbox"
                            onChange={() => handleCheck(course.id)}
                            checked={checked.includes(course.id)}
                        />
                        <label>{course.name}</label>
                    </div>
                );
            })}
            <button onClick={handleSubmit}>Submit</button>
            <hr />
        </div>
    );
}

export default Checkbox;
