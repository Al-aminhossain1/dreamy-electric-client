import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ProfileModal from './ProfileModal';

const MyProfile = () => {
    const [profile, setProfile] = useState(null);
    const [user] = useAuthState(auth);
    return (
        <div>
            <div className=''>
                <h1 className='text-xl font-medium text-green-500'>Please add Update your profile</h1>
                <label for="profile-modal" onClick={() => setProfile(user)} class=" btn btn-accent text-white btn-sm">Update Profile</label>


            </div>
            {
                profile && <ProfileModal
                    profile={profile}
                ></ProfileModal>
            }
        </div>
    );
};

export default MyProfile;