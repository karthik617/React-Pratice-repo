import React,{useEffect, useState} from 'react';
import './App.css';
function App() {
  const postList = [
    {
      id:0,
      text:"This is First Post",
      likes:300
    },
    {
      id:1,
      text:"This is the Second Post",
      likes:200
    },
    {
      id:2,
      text:"This is Third Post",
      likes:500
    }
  ]
  const [posts,setPosts] = useState(postList)
  const [singlePost,setsinglePost] = useState({})
  const [newPost,setnewPost] = useState({
    id:posts.length,
    text:"",
    likes:100
  })
  const [text,setText] = useState("")

  const liked = (post)=>{
    let p = posts[post]
    p.likes++
    setsinglePost(p)
    updatePostList(post)
  }
  const updatePostList = (post)=>{
    let newPost = [...posts]
    console.log(newPost[post])
    console.log(posts)
    setPosts(newPost)
  }

  const addPostList = ()=>{
    let t = text
    newPost.text = t
    console.log(newPost)
    setnewPost(newPost)
    let nP = [...posts,newPost]
    console.log(nP)
    setPosts(nP)
    setnewPost({
      id:nP.length,
      text:"",
      likes:0
    })
    
  }
  const textPost=(e)=>{
    setText(e.target.value)  
  }
  return(
    <div>{
      posts.map((post,i)=>
        <div key={i}>
          <h3>{post.id+1}.{post.text}</h3>
          <button onClick={()=>liked(post.id)}>{post.likes}</button>       
        </div>
      )
    }
    <hr></hr>
      <div>
        <label>Enter Text For The Post: </label>
        <input placeholder='Enter the text for Post...' value={text} onChange={(e)=>textPost(e)}></input><br></br>
        <button onClick={()=>addPostList()}>Add Post</button>
      </div>    
    </div>
  ) 
 
}

export default App;
