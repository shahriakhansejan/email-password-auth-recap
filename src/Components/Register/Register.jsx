import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";

const Register = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleForm = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const checked = e.target.terms.checked;

        setErrorMessage('')
        setSuccessMessage('')

        if(password.length < 6){
            setErrorMessage('Password at least 6 Characters or longer')
            return;
        }
        if(!/[A-Z]/.test(password)){
            setErrorMessage('Password will be at least one uppercase')
            return;
        }
        if(!checked){
            setErrorMessage('Please Accept our terms and conditions')
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user)
            setSuccessMessage('User Created Successfully')

            sendEmailVerification(result.user)
            .then(()=>{
                alert('Please check your email and verify your account')
            })
        })
        .catch(error => {
            console.error(error)
            setErrorMessage(error.message)
        })
    }
    return (
        <div>
            <div className="mx-auto md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Please Login</h2>
            <form className="mb-3" onSubmit={handleForm}>
                <input className="w-full px-4 py-2 rounded" placeholder="Your Email" type="email" name="email" id="" required /> <br />
                <div className="relative my-2">
                <input  className="w-full px-4 py-2 rounded"

                type={ showPassword? 'text' : 'password'} 

                placeholder="Password" name="password" id="" required /> 
                <span className="absolute top-3 right-4" onClick={() => setShowPassword(!showPassword)}>
                { showPassword? <IoMdEyeOff /> : <IoMdEye />}
                </span>
                </div>
                 <br />
                 <div className="mb-2">
                    <input className="mr-2" type="checkbox" name="terms" id="terms" />
                    <label htmlFor="terms">Please Accept <Link to="/terms">Our Terms and Conditions</Link> </label>
                 </div>
                 <p>Already have an Account? Please <Link className="hover:text-blue-500" to='/login'>Login</Link></p>
                <button className="btn btn-secondary w-full text-white font-bold text-xl">Submit</button>
            </form>
            {
                errorMessage && <p className="text-red-800">{errorMessage}</p>
            }
            {
                 successMessage && <p className="text-green-800">{successMessage}</p>
            }
            </div>
        </div>
    );
};

Register.propTypes = {
    
};

export default Register;