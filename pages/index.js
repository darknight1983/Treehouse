import withLayout from '../lib/withLayout';
import Head from 'next/head';


const Index = () => (
  <div>
    <Head>
      <title>Index page</title>
      <meta name="description" content="This is the description of the Index page" />
    </Head>
    <section className='hero-img-container'>
      <img src='/static/images/treeHouseAddison.jpg' alt="Treehouse room" />
    </section>
    <p>Content on Index page</p>
    <style jsx>{`
      .hero-img-container {
        width: 100%;
        height: 550px;
      }

      img {
        width: 100%;
        height: 100%;
      }
    `}</style>
  </div>
);

export default withLayout(Index);
