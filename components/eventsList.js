import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  item: {
   padding: 10
  },
  testMargin: {
    marginTop: 20,
    marginBottom: 20
  },
  text: {
    fontSize: '1rem'
  }
})

const EventList = (props) => {
  const { classes, events } = props;
  console.log(events)
  return (
    <Grid container justify="center" spacing={24} className={classes.testMargin}>
      {events.events.map((event, i) => (
        <Grid item key={i} xs={12} md={9}>
          <Paper className={classes.item}>
            <Grid container>
              <Grid item xs={12} md={12}>
                {/* This will be the section where the details about the event will go*/}
                <Typography variant="h4" color="primary">
                  {event.title}
                </Typography>
                <Typography variant="div">
                  {event.date_time}
                </Typography>
                <Typography variant="headline" component="p" className={classes.text}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.
                </Typography>
                <Typography variant="div">
                    {event.evenbrite_link}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}

EventList.propTypes = {
  classes: PropTypes.object
}


export default withStyles(styles)(EventList);
