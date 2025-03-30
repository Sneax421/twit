import React, {useContext} from 'react';
import Avatar from "./Avatar.jsx";
import {TwitterContext} from "../utils/context.js";

const Stats = () => {
    const {user, stats, follow} = useContext(TwitterContext);
    return (
        <div className={`user-stats`}>
            <div>
                <Avatar user={user} />
                {user.name}
            </div>
            <div className={`stats`}>
                <div
                    onClick={() => follow(1,0)}
                    onContextMenu={e => {
                        e.preventDefault();
                        follow(-1,0);
                    }}
                >Followers: {stats.followers}</div>
                <div
                    onClick={() => follow(0,1)}
                    onContextMenu={e => {
                        e.preventDefault();
                        follow(0,-1);
                    }}
                >Following: {stats.following}</div>
            </div>
        </div>
    );
};

export default Stats;