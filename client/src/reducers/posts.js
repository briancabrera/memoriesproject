import {
    CREATE,
    FETCH_ALL,
    DELETE,
    UPDATE,
    LIKE_POST,
} from "../actions/actions.js";

export const initialState = {
    posts: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE:
            return {
                posts: [...state.posts, action.payload],
            };

        case FETCH_ALL:
            return {
                posts: [...state.posts, ...action.payload],
            };

        case LIKE_POST:
        case UPDATE:
            return {
                posts: state.posts.map((post) =>
                    post._id === action.payload._id ? action.payload : post
                ),
            };

        case DELETE:
            return {
                posts: state.posts.filter((post) => post._id !== action.payload),
            };

        default:
            return state;
    }
};

export default reducer;
