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
        followers: 10,
        following: 20
    });

    const changeAvatar = url => {
        // setUser({...user, avatar: url});
        // url = null;
        setUser(prevState => ({...prevState, avatar: url || prevState.avatar}));
    }

    return (
        <div className={`app`}>
            <TwitterContext value={{
                user,
                stats,
                changeAvatar
            }}>
                <Navigation/>
                <Body/>
            </TwitterContext>
        </div>
    )
}

export default App
