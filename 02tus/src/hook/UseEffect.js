import React, { useEffect, useState } from 'react';

const tabs = ['posts', 'albums', 'photos'];
function Content() {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((res) => res.json())
            .then((post) => setPosts(post));
    }, [type]);

    useEffect(() => {
        document.title = title;
    },[title]);

    useEffect(() => {
        const handleResize = () => { 
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize);

        // cleanup function
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    },[]);

    return (
        <div className="">
            <h1 style={{ color: 'blue' }}>MOUTED !!!</h1>
            <h3>width: {width}</h3>
            <label htmlFor="" style={{ marginRight: 10 }}>
                Change title
            </label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            
            {tabs.map((tab) => {
                return (
                    <button
                        key={tab}
                        onClick={() => setType(tab) }
                    >
                        {tab}
                    </button>
                );
            })}
            {posts && posts.map((post, index) => {
                    return (
                        <div className="" key={index}>
                            <h5>
                                #{post.id} - {post.title}
                            </h5>
                            <p>{post.body}</p>
                        </div>
                    );
                }).slice(0, 10)
            }
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
