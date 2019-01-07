import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import withLayout from '../lib/withLayout';
import Head from 'next/head';
import EventsComp from '../components/eventsComp';



const Events = (props) => {
  return (
    <div>
      <Head>
        <title>Events</title>
        <meta name="description" content="This page displays events associated with The DEC." />
      </Head>
      <EventsComp />
    </div>
  )
}


export default withLayout(Events);
