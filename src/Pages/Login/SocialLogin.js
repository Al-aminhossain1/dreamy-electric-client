import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (user) {
        navigate('/blog')
    }
    const handelGoogleSignin = () => {
        signInWithGoogle();
    }
    return (
        <div className='flex justify-center'>
            <button onClick={handelGoogleSignin} className="btn w-full btn-primary">Continue with Google</button>
        </div>
    );
};

export default SocialLogin;