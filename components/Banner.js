import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import posed from 'react-pose';
import PropTypes from 'prop-types';


const styles = theme => ({
  container: {
    marginTop: '100px'
  },
  gridContainer: {
    width: '100%'
  },
  gridItems: {

  },
  img: {
    borderRadius: '100%',
    width: '350px',
    height: '350px'
  },
})

const Box = posed.div({
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.2,
  }
});

const Banner = (props) => {
  const { classes } = props;
  return (
    <div>
      <section className={classes.container}>
        <Grid container
              justify="center"
              direction='column'
              alignItems="center"
              className={classes.gridContainer}>
          <Grid item className={classes.gridItems}>
              <img src='/static/images/Banner2.png' alt="Treehouse_Room" style={{"width": "100%", "height": "100%"}}/>
          </Grid>
          <Grid item className={classes.gridItems}>
            <Box className={classes.poseBox}>
              <img src='/static/images/brand2.jpg' alt="Treehouse_Room" className={classes.img}/>
            </Box>
          </Grid>
        </Grid>
      </section>
    </div>
  )
}

Banner.propTypes = {
  classes: PropTypes.object
}


export default withStyles(styles)(Banner);
