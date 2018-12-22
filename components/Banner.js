import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import posed from 'react-pose';
import PropTypes from 'prop-types';


const styles = theme => ({
  container: {
    marginTop: '75px'
  },
  gridContainer: {
    width: '100%'
  },
  treehouse: {
    width: '80%',
    height: '100%'
  },
  title: {
    width: '100%'
  }
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
          <Grid item
                className={classes.gridItems}
                xs={12}
                align='center'>
              <img src='/static/images/Banner2.png' alt="Treehouse_Room" className={classes.title} />
          </Grid>
          <Grid item
                className={classes.gridItems}
                xs={12}
                align="center">
            <Box>
              <img src="/static/images/GrayTreehouse.png" className={classes.treehouse} />
            </Box>

            {/*

              <Box className={classes.poseBox}>
                <img src='/static/images/brand2.jpg' alt="Treehouse_Room" className={classes.img}/>
              </Box>

              */}

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
