import React,{useState} from 'react';
import postList from './Components/postList';
import Posts from './Posts';
import AddPost from './Components/AddPost';
import './App.css';
function App() {
  const [posts,setPosts] = useState(postList)
  
  const updatePost=(id,like)=>{
    let post = posts[id]
    post.likes = like + 1
    let updpost = [...posts]
    updpost[id] = post
    setPosts(updpost)
    // console.log(updpost)
    // console.log(post)
  }

  const addPost=(text)=>{
    setPosts([...posts,{id:posts.length,text:text,likes:0}])
  }
  return(
    <div>

        {posts.map(({id,text,likes},index)=>
            <Posts key={index} text={text} likes={likes} id ={id} updatePost={(id,like)=>updatePost(id,like)}/>
        )}
      
       <AddPost addPost={text=>{addPost(text)}}/>
     </div>
  )
   
 
}

export default App;
