import Head from 'next/head';
import Search from '../containers/Search';

 const Home = () => {
   return (
    <>
      <Head>
        <title>Meli Frontend Text</title>
        <meta name="description" content="Meli Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Search />
    </>
  )
}


export default Home;