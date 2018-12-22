import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

import FolderIcon from '@material-ui/icons/Folder';
import Icon from '@material-ui/core/Icon';

// Going to try Pose components from 'react-pose'
import posed from 'react-pose';


const Box = posed.div({
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
  }
})


const styles = theme => ({
  root: {
    'margin-top': '100px',
    'width': '80%',
    'margin': '0px auto'
  },
  item: {
    'width': '100%',
    'flex-grow': 1
  },
  box: {
    'width': '100%',
    'height': '100%',
    'backgroundColor': '#fff'
  },
  h1: {
    padding: '10px',
    backgroundColor: 'rgba(186, 194, 86, 1.0)'
  },
  fab: {
    margin: 12
  },
  icon: {
    marginRight: 10
  },
  description: {
    padding: 10
  },
})

const DetailsList = (props) => {
  const { details, color} = props;

  return (
    <List>
      {details.map(item => (
        <ListItem>
            <ListItemIcon>
              <Icon>star</Icon>
            </ListItemIcon>
            <ListItemText
              primary={item}
              color={color}
            />
          </ListItem>
      ))}
    </List>

  )

}

const BenefitsList = (props) => {
  const { classes } = props;
  return (
    <Grid container spacing={16} className={classes.root}>
      <Grid container justify="center">
        <Grid item lg={12} align="center">
          <img src='/static/images/addisonTreehousePerks.png' alt="Perks Logo."/>
        </Grid>
      </Grid>
    {props.perks.map((perk, i) => {
      return (
        <Grid key={perk.benefit} item
              className={classes.item}
              xs={12}
              md={6}
              lg={6}>
          <Box className={classes.box}>
            <Grid container>
              <Grid item xs={12}>
                <Typography component="h1"
                            variant="title"
                            align='center'
                            color='secondary'
                            gutterBottom={true}
                            className={classes.h1}>
                  {perk.benefit}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='body1'
                            paragraph={true}
                            align='justify'
                            className={classes.description}>
                  {perk.description}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {/* Listing detaials about the specific benefit */}
                  <DetailsList details={perk.details} color="primary" />
              </Grid>
              <Grid item xs={12}>
                <a href={perk.url}>
                  <Button variant='extendedFab' className={classes.fab}>
                    <Icon color="primary" className={classes.icon}>computer</Icon>
                    {perk.benefit}
                  </Button>
                </a>
              </Grid>
              <Grid item xs={12}>
                <a href={perk.contact_email}>
                  <Button variant='extendedFab' className={classes.fab}>
                    <Icon color="primary" className={classes.icon}>contact_mail</Icon>
                    {perk.contact_email}
                  </Button>
                </a>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      )
    })}
    </Grid>
  )
}

// <Grid key={perk.benefit} item className={classes.item}>
//   <Box className={classes.box}>
//     <Grid container>
//       <Grid item xs={12}>
//         <Typography component="h1"
//                     variant="title"
//                     align='center'
//                     color='secondary'
//                     gutterBottom={true}
//                     className={classes.h1}>
//           {perk.benefit}
//         </Typography>
//       </Grid>
//       <Grid item xs={12}>
//         <Typography variant='body1'>
//           {perk.description}
//         </Typography>
//       </Grid>
//       <Grid item xs={12}>
//         {/* Listing detaials about the specific benefit */}
//       </Grid>
//     </Grid>
//
//   </Box>
// </Grid>


export default withStyles(styles)(BenefitsList);
