import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

// Using the material-ui Button for testing as a link to another page.


const Header = () => {
  const typograph = {
    variant: 'h6',
    color: 'secondary'
  }
  const style = {
      width: '100px',
      height: '100px'
  }
  return (
    <div>
      <AppBar position="static" color="primary">
        <ToolBar>
        <Typography type='title' component='span'>
          <img
            style={style}
            src='../static/images/telegram-logo.svg'/>
        </Typography>
          <Grid container direction='row' justify='space-around' align='center'>
            <Grid item xs={12} style={{ 'textAlign': 'right' }}>
              <Link href="/benefits">
                <Button style={{ "margin": '0px 20px 0px auto' }}>Benefits</Button>
              </Link>
              <Link href="/">
                <Button style={{ "margin": '0px 20px 0px auto' }}>Page 2</Button>
              </Link>
              <Link href="/">
                <Button style={{ "margin": '0px 20px 0px auto' }}>Page 3</Button>
              </Link>
            </Grid>
          </Grid>
        </ToolBar>
      </AppBar>
    </div>
  )
}


export default Header;
