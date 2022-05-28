import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const useProfile = () => {
    const [user] = useAuthState(auth);
    const [profile, setProfile] = useState(null);
    useEffect(() => {
        if (user) {
            fetch(`https://radiant-shelf-47828.herokuapp.com/user/${user.email}`)
                .then(res => res.json())
                .then(data => setProfile(data))
        }

    }, [user, profile])
    return [profile, setProfile];
};

export default useProfile;