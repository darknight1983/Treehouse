import withLayout from '../lib/withLayout';
import Head from 'next/head';
import Grid from '@material-ui/core/Grid';
import Banner from '../components/Banner.js';

// Import Posed to try an animation on the logo image.
import posed from 'react-pose';


const Box = posed.div({
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.2,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
  }
});

const style = {
  width: '100%'
}


const Index = () => (
  <div>
    <Head>
      <title>Index page</title>
      <meta name="description" content="This is the description of the Index page" />
    </Head>
    <Banner />
    <p>Content on Index page</p>
    <style jsx>{`
      .hero-img-container {
        margin-top: 100px
      }
      .items {
        width: 100%
      }
    `}</style>
  </div>
);

export default withLayout(Index);
