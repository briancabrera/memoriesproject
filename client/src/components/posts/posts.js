import React from 'react';
import Post from './post/post';
import useStyles from './styles.js'
import { connect, useSelector } from "react-redux"
import { Grid, CircularProgress } from '@material-ui/core'

const Posts = (props) => {

    const classes = useStyles();
    
    let state = useSelector(state => state.posts)

    console.log(state)
    return (
        !state ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>

                {
                    state?.map(post => (
                        <Grid key={post._id} item xs={12} sm={6}>
                            <Post post={post} setCurrentId={props.setCurrentId} />
                        </Grid>
                    ))
                }
            </Grid>
        )
    )
}

// const mapStateToProps = (state) => ({
//     posts: state.posts
// })

// export default connect(mapStateToProps, {})(Posts)

export default Posts

