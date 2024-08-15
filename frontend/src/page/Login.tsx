import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../friebase";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export function Login() {
    const navigate = useNavigate();
    const handleClick=()=>{
        signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          console.log(result)
          const credential = GoogleAuthProvider.credentialFromResult(result);
          console.log(credential)
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        }).then(()=>{
            navigate('/');
        });
    }
    


  return (
    <div className="flex justify-center items-center h-screen">
        <button type="button" onClick={handleClick} className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Signin With Google</button>
    </div>
  )
}

export default Login