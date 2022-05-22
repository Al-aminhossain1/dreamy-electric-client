import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        createUserWithEmailAndPassword(data.email, data.password)
        console.log(data)
    };
    return (
        <div className='flex min-h-screen justify-center items-center '>
            <div class="card w-96   shadow-xl">
                <div class="card-body justify-center">
                    <h2 class=" text-center text-2xl font-medium ">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="name"
                                placeholder="Enter your name"
                                class="input input-bordered w-full max-w-xs"
                                {...register('name', {
                                    required: {
                                        value: true,
                                        message: 'name is required'
                                    }
                                }
                                )}
                            />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name?.message}</span>}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email"
                                placeholder="Enter your email"
                                class="input input-bordered w-full max-w-xs"
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Please use valid email'
                                    }
                                }
                                )}
                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email?.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email?.message}</span>}

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password"
                                placeholder="Enter your password"
                                class="input input-bordered w-full max-w-xs"
                                {...register('password', {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password should be al least 6 characters'
                                    }
                                }
                                )}
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email?.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password?.message}</span>}

                            </label>
                        </div>
                        <input className='w-full max-w-xs btn' type="submit" value="Sign Up" />
                    </form>
                    <p className='my-2'>Already have an account? <Link className='text-primary' to='/login'>Please login</Link></p>
                    <div class="divider">OR</div>
                    <button class="btn btn-primary">Continue with Google</button>

                </div>
            </div>

        </div>
    );
};

export default SignUp;