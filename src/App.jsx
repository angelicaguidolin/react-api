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
        axios.post('http://localhost:3000/post/', postData).then((response) => {
            setPostList(response.data);
           
        });
      };
   useEffect(fetchPost,[])
   const handleFormData = (fieldName, value)=>{
   setPostData((currentFormData) =>({...currentFormData,[fieldName]: value}));
   }
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
            value={postData.title}
            onChange={(e)=> handleFormData("title", e.target.value)}
            />
            <label htmlFor="title">CONTENUTO</label>
            <input type="text" 
            placeholder="inserici il contenuto del post"
            value={postData.content}
            onChange={(e)=> handleFormData("content", e.target.value)}
            />
            <label htmlFor="title">TAGS</label>
            <input type="text" 
            placeholder="inserici i tag del post"
            value={postData.tags}
            onChange={(e)=> handleFormData("tags", e.target.value)}
            />
             <label htmlFor="title">IMAGE</label>
            <input type="url" 
            placeholder="inserici l'immagine del post"
            value={postData.image}
            onChange={(e)=> handleFormData("image", e.target.value)}
            />
            <button type="submit">Crea post</button>
        </form>
        

    </div>
    </>
  )
}