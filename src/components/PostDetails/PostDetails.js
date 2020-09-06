import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { CssBaseline, Container } from '@material-ui/core';
import Comment from '../Comment/Comment';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        boxShadow: '10px 10px 10px lightgrey',
        fontSizecolor: theme.palette.text.primary,
    },
}));


const PostDetails = () => {

    const classes = useStyles();

    const { postId } = useParams();
    const [post, setPost] = useState({})
    useEffect(() => {
        const postUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(postUrl)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])


    const [comment, setComment] = useState([]);
    useEffect(() => {
        const commentUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(commentUrl)
            .then(res => res.json())
            .then(data => setComment(data))
    }, [])

    const { title, body, id } = post;
    const postStyle = {
        backgroundColor: '#cfe8fc',
        padding: '10px',
        borderRadius: '5px',
        margin: '20px',
        textAlign: 'center',
        textTransform: 'capitalize'
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Container fixed>

                <div style={postStyle}>

                    <p style={{ fontSize: '1rem', fontWeight: '600' }}>post details of user({id})</p>
                    <h2> {title}</h2>
                    <h4>{body}</h4>

                </div>

                <Grid container spacing={3}>
                    <Grid item xs sm md lg xl>
                        <Paper className={classes.paper}>
                            <h3 style={{ textAlign: 'center', fontSize: '30px', fontWeight: '600' }}>Comments: {comment.length}</h3>
                            {
                                comment.map((comment => <Comment key={comment.id} comment={comment}></Comment>))
                            }
                        </Paper>
                    </Grid>
                </Grid>

            </Container>
        </div>

    );
};

export default PostDetails;