import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Posts() {
const [posts,setPosts] = useState([])
const [expandedPostId,setExpandedPostId] = useState(null)

    const getAllPosts = () => {
        axios.get('https://fakestoreapi.com/products')
        .then(res=>{
            console.log(res)
            setPosts(res.data);
        })
        .catch (err=>{
            console.log('error fetching posts', err)
        })
    }
    // getAllPosts();

    useEffect(()=>{
        getAllPosts();
    },[])

    const handlePostClick = (postId) => {
        if (postId === expandedPostId ){
            setExpandedPostId(null);
        } else {
            setExpandedPostId(postId);
        }
    };

  return (
    <>
   <div className='Posts'>
        {/* <button onClick={getAllPosts}>get posts</button> */}
        <div className='post-list'>
            {posts.map(post => (
                <div key={post.id} className='post'>
                    <section onClick={()=> handlePostClick(post.id)}>
                    <h2>{post.title}</h2>
                    <br/>
                    <img src={post.image} alt={post.title}/>
                    <h5>Price: ${post.price} USD</h5>
                    
                    </section>
                    {expandedPostId === post.id &&(
                    <div>
                        <h5>Item Description:</h5> 
                        <p>{post.description}</p>
                        <h5>Category:</h5>
                        <p>{post.category}</p>
                        <h5>Rating:</h5>
                        <p>{post.rating.rate}</p>
                        <h5>Inventory remaining:</h5>
                        <p>{post.rating.count}</p>
                    </div> 
                    )}
                </div>
            ))}
        </div>    
    </div>
    </>
  )
}

export default Posts