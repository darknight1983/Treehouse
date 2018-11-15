import withLayout from '../lib/withLayout'
import Head from 'next/head';

const BenefitsComp = () => {
  return (
    <div>
      <Head>
        <title>Index page</title>
        <meta name="description" content="This is the description of the Index page" />
      </Head>
      <p>This is where the Company benefits will go.</p>
    </div>
  )
}

export default withLayout(BenefitsComp);
