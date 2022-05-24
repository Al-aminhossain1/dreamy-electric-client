import React from 'react';

import { toast } from 'react-toastify';


const ProfileModal = ({ profile }) => {
    // const [user] = useAuthState(auth);
    const handelUpdateProfile = event => {
        event.preventDefault();
        // const user=event.target.user.value;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const linkedin = event.target.linkedin.value;
        const education = event.target.education.value;
        const profile = { name, email, address, phone, linkedin, education };
        fetch(`http://localhost:5000/user/${profile.email}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                event.target.reset();
                if (data.modifiedCount > 0) {
                    toast('Your profile Update successful')
                }
            })
        console.log(profile);
    }
    return (
        <div>
            <input type="checkbox" id="profile-modal" class="modal-toggle" />
            <div class="modal">

                <div class="modal-box text-center">
                    <label for="profile-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form className='' onSubmit={handelUpdateProfile}>
                        <input type="text" name='name' disabled value={profile?.displayName} class="input my-2 input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={profile?.email} class="input my-2 input-bordered w-full max-w-xs" />
                        <input type="text" name='address' placeholder="Enter you Location" class="input my-2 input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" class="input my-2 input-bordered w-full max-w-xs" />
                        <input type="text" name='education' placeholder='Educational Qualification' class="input my-2 input-bordered w-full max-w-xs" />
                        <input type='url' name='linkedin' placeholder="Add your linkedIn profile" class="input my-2 input-bordered w-full max-w-xs" />
                        {/* <label for="profile-modal" class="btn w-full max-w-xs">submit</label> */}
                        <input type="submit" className='btn my-2 input-bordered w-full max-w-xs' value="submit" />
                        <div class="  modal-action flex justify-center">

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfileModal;