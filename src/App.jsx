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
    const [postList, setPostList] = useState([]);
    const [postData, setPostData]= useState(postPrev)
    //MOSTRA POST
    const fetchPost=() =>{
        axios.get('http://localhost:3000/post/bacheca')
        .then(function (response) {
            setPostList(response.data)
        })
    }
    //CREATE POST
    const handleSubmitForm = (event) => {
        event.preventDefault();
        axios.post("", postData).then((response) => {
            setPostList((currentPost) => [...currentPost, response.data]);
            setPostData(postPrev);
        });
      };
   useEffect(fetchPost,[])
  return(
    <>
    <h1>Post ricette</h1>
    <div>
        <ul>
            {postList.map ((post)=>
            <>
            <li key={post.id}>{post.title}</li> 
            <img src={post.image} alt={post.title} />
            <p>{post.content}</p>
            </>
            )}
            </ul>
        <br />
        <h2>NUOVO POST</h2>
        <form onSubmit={handleSubmitForm}>
            <label htmlFor="title">TITOLO</label>
            <input type="text" 
            placeholder="inserici il titolo del post"
            value={setPostData.title}
            />
            <label htmlFor="title">CONTENUTO</label>
            <input type="text" 
            placeholder="inserici il contenuto del post"
            value={setPostData.content}
            />
            <label htmlFor="title">TAGS</label>
            <input type="text" 
            placeholder="inserici i tag del post"
            value={setPostData. tags}
            />

        </form>
        <button type="submit">Crea post</button>

    </div>
    </>
  )
}