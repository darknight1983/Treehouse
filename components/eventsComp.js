import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import EventList from './eventsList';


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
  const { classes, events } = props;

  return (
    <div className={classes.root}>
      <div className={classes.backgroundTest}>
        <Typography variant="h1" color="primary">
          Events
        </Typography>
      </div>
      <EventList events={events}/>
      {/* Im going to build a grid list in another file because I think
        the styles for this component will probably fill up the file a bit.

        */}

    </div>
  )
}

export default withStyles(styles)(EventsComp);
