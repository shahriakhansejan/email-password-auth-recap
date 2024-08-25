import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
    const [error, setError] = useState('');
    const [login, setLogin] = useState('');
    const emailRef = useRef(null);

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setLogin('')
        setError('')
        
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            console.log(result.user)
            if(result.user.emailVerified){
              setLogin('User Login Successfully')
            }
            else{
              alert('Please Verify your email address')
            }
        })
        .catch(error=>{
            console.error(error)
            setError(error.message)
        })

    }

    const handleResetPassword = () =>{
        const email = emailRef.current.value;
        if(!email){
          setError('Please Provide an Email')
          return;
        }
        else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
          setError('Please Provide a valid Email')
          return;
        }
        sendPasswordResetEmail(auth, email)
        .then(()=>{
          alert('plz check your email')
        })
        .catch(error=>{
          console.error(error)
        })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" ref={emailRef} name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a onClick={handleResetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <p>New User? Please <Link className="hover:text-blue-500" to='/register'>Register</Link></p>
        <div className="form-control">
          <button className="btn btn-primary">Login</button>
        </div>
        {
        error && <p className="text-red-700">{error}</p>
      }
      {
        login && <p className="text-green-800">{login}</p>
      }
      </form>
      
    </div>
  </div>
</div>
    );
};

Login.propTypes = {
    
};

export default Login;