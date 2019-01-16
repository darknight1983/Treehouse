import withLayout from '../lib/withLayout'
import Head from 'next/head';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import BenefitsList from '../components/BenefitsList';

import Benefits from '../benefits.json';

// isomorphic fetch allows requests from client and server.
import fetch from 'isomorphic-unfetch';

class BenefitsComp extends React.Component {
  state = {
    data: Benefits
  }
  static async getInitialProps() {
    // Fetch data third party API here!
    return {};
  }
  render() {
    const { perks } = this.state.data;
    return (
      <div>
        <Head>
          <title>Benefits page</title>
          <meta name="description" content="This is the description of the Benefits page" />
        </Head>
        <BenefitsList perks={perks}/>
        {/*
          <div className="benefits-container" style={{'margin-top': '100px'}}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
       */}
      </div>
    )
  }
}



export default withLayout(BenefitsComp);
