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
        <title>Dus omdat ik dat nog vele (200) jaren met je wil lachen met allerlei avonturen (zelfs in Fryslan). Heb ik een vraag</title>
      </Head>
      <h1>Dus omdat ik dat nog vele (200) jaren met je wil lachen met allerlei avonturen. Heb ik een vraag</h1>
      <h2>
        <Link href="/posts/fifth-step">
     <img
           src="/images/facemask.jpeg"
           className={`${styles.headerImage} `}
         />
         </Link>>
      </h2>
      </div>
    //{/* </Layout> */}
  )
}