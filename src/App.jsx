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


    const follow = (sum, sum2) => {
        setStats (prevState =>
            ({...prevState,followers: prevState.followers + sum < 0 ? 0 : prevState.followers + sum,
                following: prevState.following + sum2 < 0 ? 0 : prevState.following + sum2
        }))
    }

    // Oder so
    // const changeStats = (statsType, sum) => {
    //     setStats(prevStats => {
    //         let res = prevStats[statsType] + sum;
    //         res = res < 0 ? 0 : res;
    //         return {...prevStats, [statsType]: res};
    //     })
    // }


    // const changeFollowers = sum => {
    //     setStats(prevState =>
    //         ({...prevState, followers: prevState.followers + sum < 0 ? 0 : prevState.followers + sum}));
    // }
    //
    //
    // const changeFollowing = sum => {
    //     setStats(prevState =>
    //         ({...prevState, following: prevState.following + sum < 0 ? 0 : prevState.following + sum}));
    // }


    return (
        <div className={`app`}>
            <TwitterContext value={{
                user,
                stats,
                changeAvatar,
                changeName,
                follow
                // changeFollowers,
                // changeFollowing
                // changeStats
            }}>
                <Navigation/>
                <Body/>
            </TwitterContext>
        </div>
    )
}

export default App
