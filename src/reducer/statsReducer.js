import {CHANGE_STATS} from "../actions/statsAction.js";

/*
type Stats = {
    followers: number,
    following: number
}
 */



export const statsReducer = (stats, action) => {
    switch (action.type) {
        case CHANGE_STATS: {
            const res = stats[action.payload.statsType] + action.payload.sum;
            return  {...stats, [action.payload.statsType]: res >= 0 ? res : 0};
        }
        default:
            return stats;
    }
}