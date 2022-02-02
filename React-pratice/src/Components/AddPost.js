import React,{useState} from 'react';

function AddPost({addPost}) {
    const[text,setText] = useState("")
    return <div>
        <div>
            <label>Post-Title: </label>
            <input value={text} placeholder='enter post title...' onChange={(e)=>setText(e.target.value)}></input>
        </div>
        <button onClick={()=>{addPost(text);setText("")}}>Add Post</button>
    </div>
}

export default AddPost;
