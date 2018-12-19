import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import posed from 'react-pose'

const styles = {
  poseImgBox: {
    width: '50%',

    borderRadius: '100%'
  },
  images: {
    width: '100%',
    borderRadius: '100%'
  },

}

const Box = posed.div({
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.2,
  },
});

const InternList = (props) => {
  const { interns, classes } = props;
  return (
    <div>
      <Grid container justify='center'>
        <Grid item lg={12} align="center">
          <img src='/static/images/TreehouseInterns.png' alt="Interns Logo."/>
        </Grid>
      </Grid>
      <Grid container justify="center">
        {[1, 2, 3, 4, 5, 6].map((item, i) => (
          <Grid item xs={12} sm={6} lg={4} align="center">
            <div className={classes.poseImgBox}>
              <Box className={classes.item}>
                <img src='/static/images/face2.jpg' alt='Placeholder.' className={classes.images} />
              </Box>
            </div>
            <Typography variant='title' color='secondary'>
              Sebastian
            </Typography>
            <Typography variant='body1'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

InternList.propTypes = {
  classes: PropTypes.object
}


export default withStyles(styles)(InternList)
