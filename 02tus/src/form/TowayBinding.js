import React, { useState } from 'react';

const Gifts = ['CPU i9', 'CB650', 'RGB Keyboard'];
function TowayBinding() {
    const [gift, setGift] = useState('');
    const [info, setInfo] = useState('');

    const getGift = () => {
        let index = Math.floor(Math.random() * 3);
        console.log('Gifts[index] :>> ', Gifts[index]);
        setGift(Gifts[index]);
    };
    return (
        <div>
            <h3>TowayBinding:</h3>
            <h5>{gift || 'Chưa lấy phần thưởng'}</h5>
            <button onClick={getGift}>Lấy thưởng</button>
            <br />
            <div className="form-input" style={{ marginTop: '20px' }}>
                <label htmlFor="">Your Info</label>
                <input type="text" onChange={(e) => setInfo(e.target.value)} style={{ marginLeft: '10px' }} />
                <p>Info: {info}</p>
            </div>

            <hr />
        </div>
    );
}

export default TowayBinding;
