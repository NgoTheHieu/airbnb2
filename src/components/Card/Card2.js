
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Amazing tricks help man cook every meal"
        country={props.country}
      />
      <CardMedia
        className={classes.media}
        image="data:image/jpeg;base64,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"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description</Typography>
          <Typography paragraph>
            {props.description}
          </Typography>
          <Typography paragraph>
            Description
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}