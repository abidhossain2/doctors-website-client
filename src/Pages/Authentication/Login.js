import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth';

const Login = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate();
    const { handleSubmit, reset, formState: { errors }, register } = useForm();
    const [errMsg, seterrMsg] = useState("")
    const [errMsg2, seterrMsg2] = useState("")
    const [errMsg3, seterrMsg3] = useState("")
    const onSubmit = data => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
                if (errorCode == "auth/user-not-found") {
                    let err = <div style={{
                        width: "312px",
                        margin: "auto",
                        padding: "6px",
                        textAlign: "center",
                        borderRadius: "12px",
                        background: "#9a2727",
                        color: "white",
                        fontWeight: "bold"
                    }}><p>Invalid Email</p></div>
                    seterrMsg(err);
                }
                if (errorCode == "auth/too-many-requests") {
                    let passerr = <div style={{
                        width: "312px",
                        margin: "auto",
                        padding: "6px",
                        textAlign: "center",
                        borderRadius: "12px",
                        background: "#9a2727",
                        color: "white",
                        fontWeight: "bold"
                    }}>
                        <p>Something went wrong</p>
                    </div>
                    seterrMsg2(passerr);
                }
                if (errorCode == "auth/wrong-password") {
                    let passerr2 = <div style={{
                        width: "312px",
                        margin: "auto",
                        padding: "6px",
                        textAlign: "center",
                        borderRadius: "12px",
                        background: "#9a2727",
                        color: "white",
                        fontWeight: "bold"
                    }}>
                        <p>Wrong Password</p>
                    </div>
                    seterrMsg3(passerr2);
                }
            });
        reset();
    };
    if(user){
        navigate('/')
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                {errMsg2 || errMsg || errMsg3}
                <div className="card-body">
                    <h2 className='text-center text-3xl font-bold'>Log In</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            id="email"
                            className='bg-slate-200 w-full p-3 rounded-lg'
                            placeholder='Email'
                            {...register("email", {
                                required: "Email is required"
                            })}
                            type="email"
                        />
                        {errors.email && <small role="alert">{errors.email.message}</small>}
                        <br /> <br />
                        <input
                            id="password"
                            className='bg-slate-200 w-full p-3 rounded-lg'
                            placeholder='Password'
                            {...register("password", {
                                required: "Password is required"
                            })}
                            type="password"
                        />
                        {errors.password && <small role="alert">{errors.password.message}</small>}

                        <br /> <br />
                        <input className='bg-slate-500 w-full p-3 rounded-lg text-white font-bold cursor-pointer' type="submit" value="Log In" /> <br />
                        <small>New to doctors portal? <Link to="/login" className='text-blue-500'>Register</Link></small>
                        <div className="divider">OR</div>
                        <input className='bg-slate-500 w-full p-3 rounded-lg text-white font-bold cursor-pointer' type="submit" value="Sign in with google" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;