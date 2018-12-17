import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// Going to try Pose components from 'react-pose'
import posed from 'react-pose';


const Box = posed.div({
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.2,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
  }
})


const styles = theme => ({
  root: {
    'margin-top': '100px',
    'backgroundColor': 'gray',
    'width': '80%',
    'margin': '0px auto'
  },
  item: {
    'width': '50%',
    'flex-grow': 1
  },
  box: {
    'width': '100%',
    'height': '150px',
    'backgroundColor': '#fff'
  },
  h1: {
    padding: '10px'
  }
})



const BenefitsList = (props) => {
  const { classes } = props;
  return (
    <Grid container spacing={16} className={classes.root}>
      {props.perks.map(perk => (
        <Grid key={perk.benefit} item className={classes.item}>
          <Box className={classes.box}>
            <Typography component="h1"
                        align='center'
                        color='secondary'
                        gutterBottom={true}
                        className={classes.h1}>
              {perk.benefit}
            </Typography>
          </Box>
          {/*
            <Paper square={true} elevation={4}>
              <Typography component="h3">
                {perk.benefit}
              </Typography>
              <Typography component="p">
                {perk.description}
              </Typography>
              <Button href={perk.url}>
                {perk.url}
              </Button>
            </Paper>

            */}

        </Grid>
      ))}
    </Grid>
  )
}


export default withStyles(styles)(BenefitsList);
