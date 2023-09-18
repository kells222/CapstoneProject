import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Filter from './Filter';
import {CartContext} from './Cart';

function Posts() {
const [posts,setPosts] = useState([])
const [expandedPostId,setExpandedPostId] = useState(null)
const [selectedCategory,setSelectedCategory] = useState('');
const [categories, setCategories] = useState([]);
const {cartItems, addToCart} = useContext(CartContext)

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
        <div className='grid-container'>
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
                        <button onClick={() => addToCart(post)} className='px-4 py-2 bg-gray-800 text-black text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700' >Add to cart</button>
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