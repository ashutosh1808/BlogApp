import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Link,useNavigate} from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import Create from "./Create"
import Error404 from "./Error404"
import {useState} from "react"
import {signOut} from "firebase/auth"
import {auth} from "./FbConfig"

function App() {
  const[isAuth,setIsAuth]=useState(localStorage.getItem("isAuth"))

  const signUserOut=()=>{
	signOut(auth)
	.then(()=>{
		localStorage.clear()
		setIsAuth(false)
		window.location.pathname="/login"
	})
   }

  return (
    <div className="App">
  	<BrowserRouter>
	<nav>
	<center>
	<Link to="/">Home</Link>
	{!isAuth?(
		<Link to="/login">Login</Link>
	):(
		<>	
		<Link to="/create">Create Post</Link>
		<button onClick={signUserOut}>Log out</button>
		</>
	)}
	</center>
	</nav>
	<Routes>
	<Route path="/" element={<Home isAuth={isAuth}/>}/>
	<Route path="/create" element={<Create isAuth={isAuth}/>}/>
	<Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
	<Route path="*" element={<Error404/>}/>
	</Routes>
	</BrowserRouter>
    </div>
  );
}

export default App;
