import React, { useState } from "react";
import "./style.css"

const Post = ({token}) => {
  const [error, setError] = useState('');
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [willDeliver, setwillDeliver] = useState(false)
  const isLoggedIn = token!==''
  
  async function handleSubmit(event) {
    event.preventDefault();
    if (!isLoggedIn){
        console.error(error)
        return;
    }
    try {
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2209-ftb-ct-web-pt/posts`, {
            method: 'POST',
              headers: {
              'Content-Type': `application/json`,
              'Authorization': `Bearer ${token}`
            }, body: JSON.stringify({
                post: {
                    title: title,
                    description: description,
                    price: price,
                    willDeliver: willDeliver
                }
            })
    });
      
          const json = await response.json();
        console.log(json)
        } 
        catch (error) {
          console.error(error);
          setError('Unexpected error has occured')
        }
      }
            
return (
    <form onSubmit={handleSubmit} className="postForm">
    {isLoggedIn ? (
        <>
    <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
    <label htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
    <label htmlFor="willDeliver">Will deliver?</label>
        <input
          type="checkbox"
          id="willDeliver"
          value={willDeliver}
          onChange={(event) => setwillDeliver(event.target.value)}
        />
    <textarea className="descriptionForm" htmlFor="description"
          type="text"
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}>Description</textarea>
        
    <button type="submit" onClick={handleSubmit}>Post</button>
    </> 
    ) : (
        <p> You must be logged in to create a post</p>
    )}
  </form>
);
};

export default Post