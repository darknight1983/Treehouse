import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
  root: {
    backgroundColor: 'rgba(117, 117, 117, 1.0)',
    height: '200px'
  }
})

const Footer = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      This is the footer
    </div>
  )
}


export default withStyles(styles)(Footer);
