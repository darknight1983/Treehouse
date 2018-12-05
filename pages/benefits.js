import withLayout from '../lib/withLayout'
import Head from 'next/head';
import React from 'react';

import Benefits from '../benefits.json';

// isomorphic fetch allows requests from client and server.
import fetch from 'isomorphic-unfetch';

class BenefitsComp extends React.Component {
  state = {
    data: Benefits
  }
  static async getInitialProps() {
    // Fetch datam third party API here!
    return {};
  }
  render() {
    return (
      <div>
        <Head>
          <title>Benefits page</title>
          <meta name="description" content="This is the description of the Benefits page" />
        </Head>
        <p>This is where the Company benefits will go.</p>
        <div>{this.state.treehouseperks}</div>
      </div>
    )
  }
}

// const BenefitsComp = () => {
//
//   return (
//     <div>
//       <Head>
//         <title>Benefits page</title>
//         <meta name="description" content="This is the description of the Benefits page" />
//       </Head>
//       <p>This is where the Company benefits will go.</p>
//     </div>
//   )
// }

// Attempting to fetch data asynchronously
// BenefitsComp.getInitialProps = async () => {
//
//   const data = await import('../benefits.json')
//
//
//   return {
//     data: data
//   }
//
// }

export default withLayout(BenefitsComp);
