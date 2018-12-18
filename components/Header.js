import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// Using the material-ui Button for testing as a link to another page.

// const typograph = {
//   variant: 'h6',
//   color: 'secondary'
// }
// const style = {
//     width: '100px',
//     height: '100px'
// }

const styles = {
  root: {
    flexGrow: 1,
  },
  title: {
    width: '50%',
  },
};

const Header = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary">
        <ToolBar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant='title'color="inherit" component='p'>
            Addison Treehouse
          </Typography>
          <Grid container direction='row' justify='space-around' align='center'>
            <Grid item xs={12} style={{ 'textAlign': 'right' }}>
              <Link href="/benefits">
                <Button style={{ "margin": '0px 20px 0px auto' }}>Benefits</Button>
              </Link>
              <Link href="/">
                <Button style={{ "margin": '0px 20px 0px auto' }}>Page 2</Button>
              </Link>
              <Link href="/interns">
                <Button style={{ "margin": '0px 20px 0px auto' }}>Interns</Button>
              </Link>
            </Grid>
          </Grid>
        </ToolBar>
      </AppBar>
    </div>
  )
}


export default withStyles(styles)(Header);
