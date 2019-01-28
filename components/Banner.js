import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import posed from "react-pose";
import PropTypes from "prop-types";
import Facebook from "mdi-material-ui/Facebook";
import Twitter from "mdi-material-ui/Twitter";
import Instagram from "mdi-material-ui/Instagram";
import Linkedin from "mdi-material-ui/Linkedin";

const styles = theme => ({
  container: {
    marginTop: "75px"
  },
  gridContainer: {
    width: "100%"
  },
  treehouse: {
    width: "70%",
    height: "100%"
  },
  title: {
    width: "100%"
  },
  socialContainer: {
    paddingTop: 30
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

const Box = posed.div({
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  hover: {
    scale: 1.2
  }
});

const Banner = props => {
  const { classes } = props;
  return (
    <div>
      <section className={classes.container}>
        <Grid
          container
          justify="center"
          direction="column"
          alignItems="center"
          className={classes.gridContainer}
        >
          <Grid item className={classes.gridItems} xs={10} align="center">
            <img
              src="/static/images/Banner2.png"
              alt="Treehouse_Room"
              className={classes.title}
            />
          </Grid>
          <Grid item className={classes.gridItems} xs={12} align="center">
            <Box>
              <img
                src="/static/images/GrayTreehouse.png"
                className={classes.treehouse}
              />
            </Box>
            <Grid
              container
              justify="center"
              spacing={24}
              className={classes.socialContainer}
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
              <Grid item>
                <IconBox>
                  <Instagram color="primary" />
                </IconBox>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </section>
    </div>
  );
};

Banner.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Banner);
