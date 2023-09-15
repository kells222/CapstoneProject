import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filter from './Filter';

function Posts() {
const [posts,setPosts] = useState([])
const [expandedPostId,setExpandedPostId] = useState(null)
const [selectedCategory,setSelectedCategory] = useState('');
const [categories, setCategories] = useState([]);

    const getAllPosts = () => {
        axios.get('https://fakestoreapi.com/products')
        .then(res=>{
            console.log(res)
            setPosts(res.data);
            // const specificCats = [...new Set(data.map((post)=> post.category))];
            // setCategories(specificCats);
            // console.log(specificCats);
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

   const handleCatChange = (category) => {
    setSelectedCategory(category);
   };

   const filteredPosts = selectedCategory
   ? posts.filter((post)=> post.category === selectedCategory) : posts;


  return (
    <>
   <div className='Posts'>

        <Filter categories={categories} selectedCategory={selectedCategory} onSelectCategory={handleCatChange}/>

        {/* <button onClick={getAllPosts}>get posts</button> */}
        <div className='post-list'>
            <h4>Click an item to view more details</h4>
            {filteredPosts.map(post => (
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