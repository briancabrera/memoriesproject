import * as api from "../api/api.js"

export const FETCH_ALL = "FETCH_ALL"
export const CREATE = "CREATE"
export const DELETE = "DELETE"
export const UPDATE = "UPDATE"
export const LIKE_POST = "LIKE_POST"

export const getPosts = (payload) => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({
            type: FETCH_ALL,
            payload: data
        })
    } catch (err) {
        console.log(err)
    }
}

export const createPost = (payload) => async (dispatch) => {
    try {
        const { data } = await api.createPosts(payload)
        dispatch({
            type: CREATE,
            payload: data
        })
    } catch (err) {
        console.log(err)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePosts(id, post);
        dispatch({
            type: UPDATE,
            payload: data
        })
    } catch (err) {
        console.log(err);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePosts(id)
        dispatch({
            type: DELETE,
            payload: id
        })
    } catch (err) {
        console.log(err)
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePosts(id);
        dispatch({
            type: LIKE_POST,
            payload: data
        })
    } catch (err) {
        console.log(err)
    }
}