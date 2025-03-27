import React, {useContext} from 'react';
import {TwitterContext} from "../utils/context.js";


const Avatar = ({size}) => {
    const {user, changeAvatar, changeName} = useContext(TwitterContext)

    return (
        <img
            onClick={() => {
                const url = prompt('Enter avatar url');
                changeAvatar(url);
            }}
            onContextMenu={e => {
                e.preventDefault();
                const name = prompt('Enter name');
                changeName(name);
            }}
            className={`user-avatar ${size || ''}`}
            src={user.avatar} alt={user.name}
        />
    );
};

export default Avatar;