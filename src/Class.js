import React from 'react';
import "./Class.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Class({ id, subject, teacher, bg, pp }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} className="class">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={bg}
          title= {subject}
        >
        <img className="pp" src={pp}/>
        </CardMedia>
        <CardContent className="class__content">
          <Typography gutterBottom variant="h4" component="h2">
            {subject}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {teacher}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}