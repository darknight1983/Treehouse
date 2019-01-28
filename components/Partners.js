import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    backgroundColor: "#FFF",
    marginTop: 40
  },
  dCB: {
    height: 200,
    backgroundImage: "url(../static/images/dallas-capital-bank.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50%",
    backgroundSize: "cover",
    transformOrigin: "50% 50%",
    marginBottom: 10
  },
  mile27: {
    height: 200,
    backgroundImage: "url(../static/images/Mile_27.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50%",
    backgroundSize: "cover",
    transformOrigin: "50% 50%",
    marginBottom: 10
  },
  revTech: {
    height: 200,
    backgroundImage: "url(../static/images/Rev_Tech.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50%",
    backgroundSize: "cover",
    transformOrigin: "50% 50%",
    marginBottom: 10
  }
});

const Partners = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container xs={12} align="center">
        <Grid item xs={12} sm={4} md={4}>
          <div className={classes.dCB} />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <div className={classes.mile27} />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <div className={classes.revTech} />
        </Grid>
      </Grid>
    </div>
  );
};

Partners.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Partners);
