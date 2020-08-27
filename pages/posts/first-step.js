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
        <title>Of het op reis is</title>
      </Head>
      <h1>Of het op reis is</h1>
      <h2>
        <Link href="/posts/second-step">
     <img
           src="/images/rome.jpeg"
           className={`${styles.headerImage} `}
         />
         </Link>>
      </h2>
      </div>
    //{/* </Layout> */}
  )
}