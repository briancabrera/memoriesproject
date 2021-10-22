import React from 'react';
import useStyles from './styles.js'
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'
import { deletePost, likePost } from "../../../actions/actions.js"
import { useDispatch } from "react-redux"

const Post = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const deletePostById = () => dispatch(deletePost(props.post._id))
    const likePostById = () => dispatch(likePost(props.post._id))

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={props.post.image} title={props.post.title}/>
            <div className={classes.overlay}>
                <Typography variant="h6">
                    {props.post.creator}
                </Typography>
                <Typography variant="body2">
                    {moment(props.post.createdAt).fromNow()}
                </Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: "white"}} size="small" onClick={() => props.setCurrentId(props.post._id)}>
                    <MoreHorizIcon fontSize="default"/>
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">
                    {props.post.tags.map(tag => `#${tag} `)}
                </Typography>
            </div>
            <CardContent>
                <Typography className={classes.title} variant="h5" gutterBottom>
                    {props.post.title}
                </Typography>   
                <Typography className={classes.details} variant="body2" component="p" color="textSecondary">
                    {props.post.message}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={deletePostById}>
                     <DeleteIcon fontSize="small"/>
                    Delete
                </Button>
                <Button size="small" color="primary" onClick={likePostById} >
                   <ThumbUpAltIcon fontSize="small"/>
                    {
                    props.post.likeCount <= 1 ? ` ${props.post.likeCount} Like` : ` ${props.post.likeCount} Likes`
                    }
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post