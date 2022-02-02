import React from 'react';


function Posts({id,text,likes,updatePost}) {
  return <div>
    <h3>{text}</h3>
    <button onClick={()=>updatePost(id,likes)}>{likes}</button>  
  </div>;
}

export default Posts;
