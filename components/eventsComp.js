import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';




const styles = theme => ({
  root: {
    marginTop: 75
  },
  backgroundTest: {
    backgroundImage: 'url(../static/images/events_background.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    width: '100vw',
    height: '50vh'
  }
});

const EventsComp = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.backgroundTest}>
        <Typography variant="h1" color="primary">
          Events
        </Typography>
      </div>
    </div>
  )
}

export default withStyles(styles)(EventsComp);
