import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useUpdateProfile, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Register = () => {
    const [updateProfile] = useUpdateProfile(auth)
    const [sendEmailVerification] = useSendEmailVerification(auth);
    const navigate = useNavigate();
    let { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        reset();
        await createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
        await sendEmailVerification()
        toast.success("Verification email sent")
        await updateProfile({ displayName: data.name });
        navigate('/')
        window.location.reload();
    };
    return (
        <>
            <div className='flex justify-center items-center h-screen'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className='text-center text-3xl font-bold'>Register</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                className='bg-slate-200 w-full p-3 rounded-lg'
                                placeholder='Name'
                                {...register("name", { required: "Name is required", minLength: 4 })} />
                            {errors.name && <small role="alert">{errors.name.message}</small>}
                            {errors.name && errors.name.type === "minLength" && <small>Name should be 4 characters or more</small>}
                            <br /> <br />
                            <input
                                id="email"
                                className='bg-slate-200 w-full p-3 rounded-lg'
                                placeholder='Email'
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "Please enter valid email"
                                    }
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
                                    required: "Password is required",
                                    pattern: {
                                        value: /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[#?!@$%^&*\-_]).{6,}$/,
                                        message: "Your password should contain at least 1 uppercase, 1 digit and 1 special character"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Password should be 6 characters or long"
                                    }
                                })}
                                type="password"
                            />
                            {errors.password && <small role="alert">{errors.password.message}</small>}
                            <br /> <br />

                            <input className='bg-slate-500 w-full p-3 rounded-lg text-white font-bold cursor-pointer' type="submit" value="Register" /> <br />
                            <small>Already have an account? <Link to="/login" className='text-blue-500'>Log in</Link></small>
                            <div className="divider">OR</div>
                            <input className='bg-slate-500 w-full p-3 rounded-lg text-white font-bold cursor-pointer' type="submit" value="Sign in with google" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;