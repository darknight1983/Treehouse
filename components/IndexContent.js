import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import posed from 'react-pose';
import TreehouseContacts from './Contacts';



const styles = theme => ({
  root: {
    marginTop: 88
  },
  test: {
    backgroundColor: '#BAC256',
    opacity: 0.9
  },
  text: {
    padding: 15
  },
});




const IndexContent = (props) => {
  const { classes } = props;
  return (
    <section className={classes.root}>
      <Grid container xs={12} justify="center" className={classes.test}>
        <Grid item xs={10} sm={10} md={10} lg={10}
              align="center">
          <Typography variant='headline' component='div' paragraph={true} className={classes.text}>
            The Addison TreeHouse is part of The DEC network and
            is a coworking space and 501c3 non-profit created to
            help entrepreneurs start, build, and grow companies
            through education, mentorship, and community.
          </Typography>
        </Grid>
      </Grid>
      <TreehouseContacts />
    </section>
  )
}


IndexContent.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(IndexContent)
