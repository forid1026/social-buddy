import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 600,
        marginBottom: '30px',
        margin: 'auto'
    },
});
const linkStyle = {
    textDecoration: 'none',
}

const Post = (props) => {
    const classes = useStyles();
    const { title, body, id } = props.post;

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent style={{ textTransform: 'capitalize' }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {body}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link style={linkStyle} to={`/about/${id}`}>
                    <Button size="small" color="primary">
                        Get Details
                    </Button>
                </Link>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};

export default Post;