import { useState, useEffect } from "react";
import axios from "axios"
const postPrev= {
    id: 1,
      title: "",
      content:"",
      image: "",
      tags: [],
}
export default function App(){
    const [postList, setPostList] = useState([])


    const fetchPost=() =>{
        axios.get('http://localhost:3000/post')
        .then(function (response) {
            setPostList(response.data)
        })
      
    }
    postEff(fetchPost,[]);
  return(
    <>
    <h1>Post ricette</h1>
    <div>
        <ul>
            {postList.map ((post)=>
                <li key={post.id}>{post.title}</li> 
            )}
            
        </ul>
    </div>
    </>
  )
}