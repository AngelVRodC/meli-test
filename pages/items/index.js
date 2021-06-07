import Head from 'next/head';
import { useRouter } from 'next/router';
import SearchItems from '../../containers/SearchItems';

const Items = () => {
  const router = useRouter();
  const { search } = router.query;

   return (
    <>
      <Head>
        <title>Meli Frontend Test - Search items</title>
        <meta name="Search items" content="Search items" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchItems query={search} />
    </>
  )
}


export default Items;