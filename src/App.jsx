import './App.css'
import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import {useState} from "react";
import {TwitterContext} from "./utils/context.js";

function App() {
    const [user, setUser] = useState({
        name: 'Hendriks',
        avatar: 'https://gravatar.com/avatar/000?d=wavatar'
    });

    const [stats, setStats] = useState({
        followers: 0,
        following: 0
    });

    const changeAvatar = url => {
        // setUser({...user, avatar: url});
        // url = null;
        setUser(prevState => ({...prevState, avatar: url || prevState.avatar}));
    }
    const changeName = name => {
        setUser(prevState => ({...prevState, name: name || prevState.name}));
    }

    const incrementFollowers = () => {
        setStats(prevState =>
            ({...prevState, followers: prevState.followers +1 }));
    }

    const decrementFollowers = () => {
        setStats(prevState =>
            ({...prevState, followers: prevState.followers -1 < 0 ? 0 : prevState.followers -1}));
    }

    const incrementFollowing = () => {
        setStats(prevState =>
            ({...prevState, following: prevState.following +1 }));
    }

    const decrementFollowing = () => {
        setStats(prevState =>
            ({...prevState, following: prevState.following -1 < 0 ? 0 : prevState.following -1}));
    }


    return (
        <div className={`app`}>
            <TwitterContext value={{
                user,
                stats,
                changeAvatar,
                changeName,
                incrementFollowers,
                decrementFollowers,
                incrementFollowing,
                decrementFollowing
            }}>
                <Navigation/>
                <Body/>
            </TwitterContext>
        </div>
    )
}

export default App
