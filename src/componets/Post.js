import React from 'react'
import {useState, useEffect} from "react"
import axios from "axios"

const Post = () => { 
    const [postData, setPostData] = useState({ title: '', content: ''});
    
    const handleChange =(e)=>{
      setPostData({ ...postData, [e.target.name]: e.target.value })
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
    const {title, content} = postData;
    
    axios.post('http://3.113.15.219:8080/posts',{title,content},{
                  headers:{
                    'Content-Type':'application/json'         
                  }
        })
      .then((res) => {
            console.log(res.data);
           
            setPostData({ title: '', content: '' });
      })
        // handle response data here if needed
      .catch ((err)=>{
        console.error(err)
      });
  };
  console.log(postData)

      useEffect(() => {
        // Code to execute when component mounts or updates
        // ...
      }, [postData]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="post">
      <p><label htmlFor="title">title: </label></p>
      <p><input type="text" id="title" name="title" value={postData.title} onChange={handleChange} /></p>
      <p><label htmlFor="content">content: </label></p>
      <p><input type="text" id="content" name="content" value={postData.content} onChange={handleChange}/></p>
      <input className="button" type="submit" value="投稿！！！" />
      </div>
    </form>
  );
};


export default Post;