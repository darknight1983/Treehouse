import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';



const styles = theme => ({
  root: {
    backgroundColor: 'rgba(89, 89, 91, 1.0)',

  },
  item: {
    marginTop: 50,
    marginBottom: 50,
  },
  logo: {
    width: '50%',
    height: '100%'
  }
})

const Footer = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container xs={12} align="center">
        <Grid item xs={4} className={classes.item}>
          <Avatar src="/static/images/addison-network.png" className={classes.logo}/>
        </Grid>
        <Grid item xs={4} className={classes.item}>
          <Avatar src="/static/images/dec-network.png" className={classes.logo}/>
        </Grid>
        <Grid item xs={4} className={classes.item}>
          <Avatar src="/static/images/redbird-network.png" className={classes.logo}/>
        </Grid>
      </Grid>
    </div>
  )
}


export default withStyles(styles)(Footer);
