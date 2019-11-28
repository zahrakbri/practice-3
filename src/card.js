import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    backgroundColor: '#eee'
  },
  media: {
    height: 140,
  },
});

function MediaCard(props) {
  const classes = useStyles();
  console.log('pppp', props)
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.card.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.card.description}
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

const mapStateToProps = (state) => ({
  card: state.selectedCard
})

export default connect(mapStateToProps)(MediaCard)
