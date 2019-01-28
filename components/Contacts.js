import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import posed from "react-pose";
import Facebook from "mdi-material-ui/Facebook";
import Twitter from "mdi-material-ui/Twitter";
import Linkedin from "mdi-material-ui/Linkedin";

const styles = theme => ({
  avatar: {
    width: "40%",
    height: "40%"
  },
  paper: {
    backgroundColor: "#FAFAFA",
    opacity: 1,
    marginTop: 15,
    marginBottom: 15,
    padding: 15
  },
  contactsCont: {
    marginTop: 25,
    marginBottom: 25
  },
  icons: {
    width: 25,
    height: 25
  },
  contactTitle: {
    marginTop: 10,
    marginBottom: 10
  },
  contactSocial: {
    marginBottom: 10
  },
  contactDescription: {
    marginBottom: 10
  }
});

const IconBox = posed.div({
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  hover: {
    scale: 1.2
  }
});

const TreehouseContacts = props => {
  const { classes } = props;
  return (
    <Grid
      container
      xs={12}
      align="center"
      justify="space-around"
      className={classes.contactsCont}
    >
      <Grid item xs={10} sm={5} md={5}>
        <Paper elevation={1} className={classes.paper}>
          <Avatar
            className={classes.avatar}
            src="/static/images/NancyImg.jpeg"
          />
          <Typography
            variant="title"
            component="h1"
            className={classes.contactTitle}
          >
            Nancy Hong
          </Typography>
          <Grid
            container
            justify="center"
            spacing={24}
            className={classes.contactSocial}
          >
            <Grid item>
              <IconBox>
                <Facebook color="primary" />
              </IconBox>
            </Grid>
            <Grid item>
              <IconBox>
                <Twitter color="primary" />
              </IconBox>
            </Grid>
            <Grid item>
              <IconBox>
                <Linkedin color="primary" />
              </IconBox>
            </Grid>
          </Grid>
          <Typography
            variant="subheading"
            component="h1"
            className={classes.contactDescription}
          >
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock,
          </Typography>
          <Divider />
          <Grid container xs={12} align="center" justify="center">
            <Grid item xs={12} sm={10} md={10} lg={6}>
              <Typography variant="subtitle1" color="inherit" align="center">
                nancy@addisontreehouse.com
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10} md={10} lg={6}>
              <Typography variant="subtitle1" color="inherit" align="center">
                (972) 450-7076
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={10} sm={5} md={5}>
        <Paper elevation={1} className={classes.paper}>
          <Avatar
            className={classes.avatar}
            src="/static/images/NancyImg.jpeg"
          />
          <Typography
            variant="title"
            component="h1"
            className={classes.contactTitle}
          >
            Nancy Hong
          </Typography>

          <Grid
            container
            justify="center"
            spacing={24}
            className={classes.contactSocial}
          >
            <Grid item>
              <IconBox>
                <Facebook color="primary" />
              </IconBox>
            </Grid>
            <Grid item>
              <Twitter color="primary" />
              <IconBox />
            </Grid>
            <Grid item>
              <IconBox>
                <Linkedin color="primary" />
              </IconBox>
            </Grid>
          </Grid>
          <Typography
            variant="subheading"
            component="h1"
            className={classes.contactDescription}
          >
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock,
          </Typography>
          <Divider />
          <Grid container xs={12} align="center" justify="center">
            <Grid item xs={12} sm={10} md={10} lg={6}>
              <Typography variant="subtitle1" color="inherit" align="center">
                nancy@addisontreehouse.com
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10} md={10} lg={6}>
              <Typography variant="subtitle1" color="inherit" align="center">
                (972) 450-7076
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

TreehouseContacts.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(TreehouseContacts);
