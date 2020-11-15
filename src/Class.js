import React from 'react';
import "./Class.css";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140
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
          <Typography gutterBottom variant="h4" component="h2" className="subject">
            {subject}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {teacher}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}