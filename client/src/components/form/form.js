import React from 'react';
import useStyles from './styles.js'
import { TextField, Button, Typography, Paper } from "@material-ui/core"
import { useState, useEffect } from 'react';
import FileBase from "react-file-base64"
import { useDispatch, connect } from 'react-redux';
import { createPost, updatePost } from '../../actions/actions.js'

const Form = ({ currentId, setCurrentId, posts }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const post = currentId ? posts.find(post => post._id === currentId) : null

    useEffect(() => {
        if (post) setPostData(post)
    }, [post])

    const [postData, setPostData] = useState({
        creator: "",
        title: "",
        message: "",
        tags: "",
        image: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, postData))

        } else {
            dispatch(createPost(postData));
        }
        clear();
    }

    const handleChange = (e) => {
        setPostData({
            ...postData,
            [e.target.name]: e.target.value
        })
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({
            creator: "",
            title: "",
            message: "",
            tags: "",
            image: ""
        })
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">
                    {currentId ? "Editing" : "Creating"} a Memory
                </Typography>
                <TextField
                    name="creator"
                    variant="outlined"
                    label="Creator"
                    fullWidth
                    value={postData.creator}
                    onChange={handleChange}
                />
                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={postData.title}
                    onChange={handleChange}
                />
                <TextField
                    name="message"
                    variant="outlined"
                    label="Message"
                    fullWidth
                    value={postData.message}
                    onChange={handleChange}
                />
                <TextField
                    name="tags"
                    variant="outlined"
                    label="tags"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => {
                        setPostData({
                            ...postData,
                            [e.target.name]: e.target.value.split(",")
                        })
                    }}
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) =>
                            setPostData({
                                ...postData,
                                image: base64
                            })
                        }
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="container" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps, {})(Form)