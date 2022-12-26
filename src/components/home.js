import React from 'react'
import {useState, useEffect} from 'react'
import "./style.css"


const Home = () => {
  const [homePosts, setPosts] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://strangers-things.herokuapp.com/api/2209-ftb-ct-web-pt/posts');
      const json = await response.json();
      console.log(json)
      setPosts(json.data.posts);
    }
    fetchData();
  }, []);


  return (
    <div className='postBody'>
      {homePosts.map((post) => (
        <div key={post.id} className='userPosts'>
          <h2 className='postTitle'>{post.title}</h2>
          <p className='postDescription'>{post.description}</p>
          <p className='postPrice'>{post.price}</p>
          <p className='postwillDeliver'>{post.willDeliver}</p>
          <p>{post.username}</p>
        </div>
        
      ))}
    </div>
  );
      }
  

export default Home