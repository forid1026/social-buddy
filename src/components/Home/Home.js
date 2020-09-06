import React, { useState, useEffect } from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Post from '../Post/Post';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: '0px',
        marginTop: '0px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        border: 'none',
    },
}));

const Home = () => {

    const classes = useStyles();

    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Container fluid>

                <p style={{ fontSize: '30px', textAlign: 'center' }}>Total Posts: {post.length}</p>

                <Grid container spacing={3}>
                    <Grid item xs md lg sm >
                        <Paper className={classes.paper}>
                            {
                                post.map(post => <Post key={post.id} post={post}></Post>)
                            }
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Home;