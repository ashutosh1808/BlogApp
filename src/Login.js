import {auth,provider} from "./FbConfig"
import {signInWithPopup} from "firebase/auth"
import {useNavigate} from "react-router-dom"
function Login({setIsAuth})
{
const nav=useNavigate()
const signInWithGoogle=()=>{
	signInWithPopup(auth,provider)
	.then((result)=>{
		localStorage.setItem("isAuth",true)
		setIsAuth(true)
		nav("/")
	})
}
return(
<>
<center>
<div>
<h1>Sign in with Google to Continue</h1>
<button className="login-with-google-btn" onClick={signInWithGoogle}>Sign in with Google</button>
</div>
</center>
</>
)
}
export default Login;