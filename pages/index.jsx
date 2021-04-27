import Head from 'next/head'
import HomeContainer from '../modules/home/container/HomeContainer';
import { Layout } from '../components'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{`D'JorG Solutions`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContainer />
    </Layout>
  )
}
