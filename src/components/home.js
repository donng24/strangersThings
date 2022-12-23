import React from 'react'
import {useState, useEffect} from 'react'
import "./style.css"


const API_URL = 'https://strangers-things.herokuapp.com/api/2209-FTB-CT-WEB-PT/posts';

const Home = () => {
  const [homePosts, setPosts] = useState([]);
  const [comment, setComment] = useState('');
  

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(API_URL);
  //     const objectData = await response.json();
  //     console.log(objectData)
  //     setPosts(objectData.data.posts);
  //   }
  //   fetchData();
  // }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
  }
    if (!isLoggedIn) {
      setError('Please Login to post a comment')
      return;
    }

    const commentData = {
      message: comment
    };

    try {
      // send post request to API to create comment
      const response = await fetch(`https://strangers-things.herokuapp.com/api/2209-ftb-ct-web-pt/posts/POST_ID/messages`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          message: {
            content: `content`
        }
      })
    })
      
      const data = await response.json();

      if (response.ok) {
        // clear form and display success message
        setComment('');
        setError(`Comment created successfully with ID: ${data.id}`);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('There was an error creating the comment. Please try again.');
    }
  };

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