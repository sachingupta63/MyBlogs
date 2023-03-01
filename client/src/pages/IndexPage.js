import Post from "../Post";
import { useEffect, useState } from "react";

const emptyStyling = {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItem: 'center',
    display: 'flex',
    height: '80vh'
}
export default function IndexPage() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/post').then(response => {
            response.json().then(posts => {
                setPosts(posts);
            });
        });
    }, []);
    return (
        <>
            {posts.length > 0 ? posts.map((post, index, arr) => (
                <Post {...post} />
            )) :
                <div style={emptyStyling}><h2 style={{ textAlign: 'center', color: '#585858' }}>No Blog Yet Now</h2></div>
            }

        </>
    );
}