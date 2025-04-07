import {legacy_createStore as createStore} from "redux";
import {twitterReducer} from "../reducer/twitterReducer.js";

const initialState = {
    user:{
        name: 'Hendriks',
        avatar: 'https://gravatar.com/avatar/000?d=wavatar'
    },
    stats:{
        followers: 0,
        following: 0
    }
}


export const store = createStore(twitterReducer, initialState);