import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import withLayout from '../lib/withLayout';
import Head from 'next/head';
import EventsComp from '../components/eventsComp';
import React, { Component } from 'react';
import EventData from "../events.json"



class Events extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      events: EventData
    }
  }
  static async getInitialProps() {
    /*
      Fetch data from third party API here.

    */
    return {};
  }
  render() {
    const { events } = this.state;
    return (
      <div>
        <Head>
          <title>Events</title>
          <meta name="description" content="This page displays events associated with The DEC." />
        </Head>
        <EventsComp events={events}/>
      </div>
    )
  }
}




export default withLayout(Events);
