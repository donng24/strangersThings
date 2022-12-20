import React from 'react'
import {useState, useEffect} from 'react'
import "./style.css"


const API_URL = 'https://strangers-things.herokuapp.com/api/2209-FTB-CT-WEB-PT/posts';

const Home = () => {
  const [homePosts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(API_URL);
      const objectData = await response.json();
      console.log(objectData)
      setPosts(objectData.data.posts);
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
          <p>{post.username}</p>
        </div>
      ))}
    </div>
  );
}













export default Home