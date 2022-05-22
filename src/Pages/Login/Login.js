import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };
    return (
        <div className='flex min-h-screen justify-center items-center '>
            <div class="card w-80   shadow-xl">
                <div class="card-body justify-center">
                    <h2 class=" text-center text-2xl font-medium text-lime-600">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                        <input className='w-full max-w-xs btn btn-primary' type="submit" value="Login" />
                    </form>
                    <div class="divider">OR</div>
                    <button class="btn">Continue with Google</button>

                </div>
            </div>

        </div>
    );
};

export default Login;