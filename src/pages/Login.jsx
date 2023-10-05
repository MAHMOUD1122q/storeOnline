import React , {useState} from 'react';
import Helmet from '../components/Helmet/Helmet';
import Logo from '../assets/images/logo.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import { toast } from 'react-toastify';

const Login = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const[loading,setLoading] = useState(false)
  const navigate = useNavigate()
  const signin =async (e)=> {
    e.preventDefault()
        setLoading(true)
        try {
          const userCredential =  await signInWithEmailAndPassword (auth,email,password)
          const user = userCredential.user
          setLoading(false)
          toast.success('successfully logged in')
          navigate('/checkout')
        } catch (error) {
          setLoading(false)
          toast.error('someting went wrong ')
        }
  }
  
  return (
    <Helmet title="login">
      {
          loading ? <div><h5 style={{textAlign:'center',padding:'30px 0',fontSize:'20px'}}>Loading......</h5></div> :
          <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto w-40" src={Logo} alt="logo"/>
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
            </div>
            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" onSubmit={signin}>
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
                    {/* <a href="" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>  */}
                    </div>
                </div>
                <div class="mt-2">
                    <input id="password" name="password" value={password} onChange={e =>setPassword(e.target.value)} required type="password" autocomplete="current-password"  class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                </div>
                <div>
                <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 duration-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                </div>
                <div><p class="text-center text-gray-700 "> if you have't account? <Link class="text-indigo-700 duration-300 hover:text-indigo-900" to="/signup">sign up</Link></p></div>
            </form>
            </div>
        </div>
      }
    </Helmet>
  );
}

export default Login;
