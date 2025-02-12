import React from "react";
import { User } from "../models/user";

interface UserProfileProps {
    user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
    return (
        <div className="user-profile">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Edad: {user.age}</p>
        </div>
    );
};

export default UserProfile;