import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

import styles from '../../components/layout.module.css'
// import utilStyles from '../styles/utils.module.css'

export default function FirstPost() {
  return (
    // <Layout>
    <div className={styles.container}>
      <Head>
        <title>Placeholder</title>
      </Head>
      <h1>Placeholder</h1>
      <h2>
        {/* <Link href="/posts/fifth-step"> */}
     <img
           src="/images/ppmask.jpeg"
           className={`${styles.headerImage} `}
         />
         {/* </Link>> */}
      </h2>
      </div>
    //{/* </Layout> */}
  )
}