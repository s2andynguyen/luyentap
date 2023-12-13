import React, { useState } from 'react';

// const orders = [100, 200, 300];

function UseState() {
    const [count, setCount] = useState(1);
    const [info, setInfo] = useState({
        name: 'Thanh tung',
        age: 22,
        address: 'Tp HCM',
    });
    // const [total, setTotal] = useState(() => {
    //     return orders.reduce((total, cur) => total + cur, 0)
    // });
    const handleUpdate = () => {
        setInfo((prev) => {
            // Logic
            return {
                ...prev,
                bio: 'Drive motobike',
            };
        });
    };
    const handelCount = () => {
        // setCount(count+1)
        // set multi
        setCount((prevState) => prevState + 1);
        setCount((prevState) => prevState + 1);
        setCount((prevState) => prevState + 1);
    };
    return (
        <div>
            <h3>UseState Hook:</h3>
            <h1>{count}</h1>
            <button onClick={handelCount}>Count</button>
            <button style={{ marginLeft: '10px' }} onClick={handleUpdate}>
                Update
            </button>
            <p>Info: {JSON.stringify(info)}</p>
            <hr />
        </div>
    );
}

export default UseState;
