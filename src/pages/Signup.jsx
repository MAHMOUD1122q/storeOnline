import React , {useState} from 'react';
import Helmet from '../components/Helmet/Helmet';
import Logo from '../assets/images/logo.jpg'
import { Link } from 'react-router-dom';
import {createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth} from '../firebase-config'
import  {storage} from '../firebase-config'
import { db } from '../firebase-config';
import { toast  } from 'react-toastify'; 
import { setDoc,doc} from 'firebase/firestore';
import { ref , uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [file,setFile] = useState(null);
  const [loading,setLoding] = useState(false)
  const navigate = useNavigate();

  const signup = async(e)=>{
    e.preventDefault()
    setLoding(true)
    try {
      const userCredential = await createUserWithEmailAndPassword(auth,email,password)
      const user = userCredential.user
      const storageRef = ref(storage,`images/${username}`)
      const uploadTask = uploadBytesResumable(storageRef,file)
      uploadTask.on((error)=>{
        toast.error(error.message)
      },()=>{
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{
          await updateProfile(user,{
            displayName:username,
            photoURL:downloadURL
          })
          await setDoc(doc(db,'users',user.uid),{
            uid:user.uid,
            displayName:username,
            email,
            photoURL:downloadURL
          })
        })
      })
      setLoding(false)
      toast.success('Account created')
      navigate('/login')
    }catch (error){
      setLoding(false)
      toast.error('something went wrong')
    }
  }

  
  return (
<Helmet title="Signup">
    {
      loading ? <div><h5 style={{textAlign:'center',padding:'30px 0',fontSize:'20px'}}>Loading......</h5></div> :
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto w-40" src={Logo} alt="logo"/>
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create Your Account</h2>
        </div>
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="signup" method="POST" onSubmit={signup}>
            <div>
                <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
                <div class="mt-2">
                <input id="Username" name="Username" type="text" value={username} onChange={e =>setUsername(e.target.value)} required class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
            </div>
            <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-2">
                <input id="email" name="email" type="email" value={email} onChange={e =>setEmail(e.target.value)} required autocomplete="email" class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
            </div>
            <div>
            <div class="flex items-center justify-between">
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div class="text-sm">
                {/* <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a> */}
                </div>
            </div>
            <div class="mt-2">
                <input id="password" name="password" minlength="6" value={password} onChange={e =>setPassword(e.target.value)} required  type="password" autocomplete="current-password"  class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
            </div>
            {/* <div>
                <label for="confirm pass" class="block text-sm font-medium leading-6 text-gray-900">Re Enter Your Password</label>
                <div class="mt-2">
                <input id="re-password" name="confirm password" minlength="6" required type="password" autocomplete="current-password" class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
            </div> */}
                <div>
                  <label for="confirm pass" class="block text-sm font-medium leading-6 text-gray-900">choose your Avtar</label>
                  <div class="mt-2">
                  <input id="file" name="file" onChange={e =>setFile(e.target.files[0])}  type="file"  class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
            </div>
            <div>
            <button type="submit" class="flex w-full justify-center duration-300 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
            </div>
            <div><p class="text-center text-gray-700 ">if you have an account? <Link class="text-indigo-700 duration-300 hover:text-indigo-900" to='/login'>sign in</Link></p></div>
        </form>
        </div>
    </div>
    }
    </Helmet>
  );
}

export default Signup;
