import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 2,
        overflow: 'hidden',
        padding: theme.spacing(0, 2),

    },
    paper: {
        maxWidth: 800,
        margin: `${theme.spacing(3)}px auto`,
        padding: theme.spacing(1),
        border: "1px solid lightgray",
        boxShadow: "10px 5px 10px lightgray",

    },
    typography: {
        lineHeight: "1.2",
        textAlign: "justify"
    }
}));


const Comment = (props) => {
    const classes = useStyles();
    const { name, email } = props.comment;

    const randomNumber = Math.floor(Math.random() * Math.floor(99));
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={3}>
                    <Grid item>
                        <Avatar style={{ marginTop: '30px', width: '50px', height: '50px' }}>
                            <img src={`https://randomuser.me/api/portraits/men/${randomNumber}.jpg`} alt="" width="50px" />
                        </Avatar>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography className={classes.typography} item xs>
                            <h4>Name : {name}</h4>
                            <p>Email : {email}</p>
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default Comment;