import React, { useEffect, useState } from 'react';

function Content() {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // document.title = title;

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((post) => setPosts(post))
    }, []);

    return (
        <div className="">
            <h1 style={{ color: 'blue' }}>MOUTED !!!</h1>
            <label htmlFor="" style={{ marginRight: 10 }}>
                Change title
            </label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            {posts && posts.map((post, index) => {
                return (
                    <div className="" key={index}>
                        <h5>#{post.id} - {post.title} </h5>
                        <p>{post.body}</p>
                    </div>
                )
            }).slice(0,10)}
        </div>
    );
}

// useEffect(callback, [deps])
function UseEffect() {
    const [show, setShow] = useState(false);

    return (
        <div>
            <h3>UseEffect:</h3>
            <button style={{ padding: '4px 8px' }} onClick={() => setShow(!show)}>
                Toggle
            </button>
            {show && <Content />}
            <hr />
            
        </div>
    );
}

export default UseEffect;
