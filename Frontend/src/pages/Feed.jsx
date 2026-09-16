import React, {useState} from 'react';

const Feed=()=>{

    const [posts, setPosts]=useState([
        {
            id:"1",
            image:"https://img.magnific.com/free-vector/v813-aew-05_53876-166405.jpg?semt=ais_hybrid&w=740&q=80",
            caption:"hello"
        }
    ]);
    return (
       <section className='feed-section'>
           {
            posts.length > 0 ? (
                posts.map((post)=>(
                    <div key={post.id} className='post-card'>
                    <img src={post.image} alt={post.caption}></img>
                    <p>{post.caption}</p>
                    </div>
                ))
            ) : (
                <h1>No posts available</h1>
            )
           }
       </section>
        )
}


export default Feed;