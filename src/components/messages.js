import React, { useState, useEffect } from "react";

const Messages = ({token}) => {
    const [message, setMessage] = useState('');
    const [messageVisible, setmessageVisible] = useState(false)
    const [error, setError]=useState(null)
    
const toggleMessage = (event) => {
        event.preventDefault();
    }

    const handleChange = (event) => {
        setMessage(event.taarget.value);
    }
    const sendMessage = async (event) => {
        event.preventDefault();

        try {
            fetch('https://strangers-things.herokuapp.com/api/2209-ftb-ct-web-pt/posts/_id/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                message: {
                    _id: _id,
                  content: content
        } 
      })
    })

} catch(error) {
        console.error(error)
        setError ('Unexpected error occured')
    }

    
}
return (
<div>
<button onClick={toggleMessage}>
        {messageVisible ? 'Cancel' : 'Send message'}
      </button>
      {messageVisible && (
        <form onSubmit={handleSubmit}>
          <label>
            Message:
            <input type="text" value={message} onChange={handleChange} />
          </label>
          <button type="submit">Send</button>
        </form>
      )}

</div>

)
}

export default Messages;