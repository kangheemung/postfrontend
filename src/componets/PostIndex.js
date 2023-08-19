import React from 'react';
import {useState, useEffect} from "react";
import axios from "axios";


const PostIndex=()=>{
       const [postData, setPostData] = useState([]);
    
    useEffect (()=>{
        axios.get(`http://${process.env.REACT_APP_API_IP}:8080/posts/index`)
   .then((res) => {
                const responseData = res.data;
                console.log(responseData); // Log the responseData to see its structure
          if (Array.isArray(responseData.posts)) { // Access the 'posts' property
           setPostData(responseData.posts);
          } else {
         console.error('API response is not an array:', responseData);
             }
        })
      .catch((err) => {
        console.error(err);
      });
    },[]);


const pLists = postData.map((list) => (
 
      <React.Fragment key={list.id}>
      <>
            <ol>=======================</ol>
            <ol>title:{list.title}</ol>
            <ol>content:{list.content}</ol>
            <ol>=======================</ol>
      </>
       </React.Fragment>
     ));
     
     return(
         <>
           <h2>PostList</h2>
           <div className="post_index">
           <ol>{pLists}</ol>
           </div>
         </>
         );
};

export default PostIndex;