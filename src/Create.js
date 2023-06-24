import {useState,useEffect} from "react"
import {addDoc,collection} from "firebase/firestore"
import {auth,db} from "./FbConfig"
import {useNavigate} from "react-router-dom"

function Create({isAuth})
{
const[title,setTitle]=useState("")
const[postText,setPostText]=useState("")

const nav=useNavigate()
const hTitle=(event)=>{setTitle(event.target.value)}
const hPostText=(event)=>{setPostText(event.target.value)}

const postCollectionRef=collection(db,"posts")
const createPost=async()=>{
	await addDoc(postCollectionRef,{title,postText,author:{name: auth.currentUser.displayName, id:auth.currentUser.uid }})
	nav("/")
}

useEffect(()=>{
	if(!isAuth)	
	{
		nav("/login")
	}
},[])
return(
<div className="createPostPage">
<div className="cpContainer">
	<h1> Create a Post</h1>
	<div className="inputGp">
	<label>Title: </label>
	<input placeholder="enter a title..." onChange={hTitle}/>
	</div>
	<br/>
	<div className="inputGp">
	<label>Post: </label>
	<textarea placeholder="Post..." onChange={hPostText}/>
	</div>
	<button onClick={createPost}>Submit Post</button>
</div>
</div>
)
}
export default Create;