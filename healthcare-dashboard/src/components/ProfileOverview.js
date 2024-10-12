import React from 'react';

const ProfileOverview = () => {
    return (
        <div className="profile-overview card">
            <div className="card-body">
                <h5 className="card-title">Profile Overview</h5>
                <p>Name: John Doe</p>
                <p>Email: john.doe@example.com</p>
                <button className="btn btn-secondary">Edit Profile</button>
            </div>
        </div>
    );
};

export default ProfileOverview;
