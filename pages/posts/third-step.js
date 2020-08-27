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
        <title>Zelfs met masker heb ik altijd lol met jou</title>
      </Head>
      <h1>Zelfs met masker heb ik altijd lol met jou</h1>
      <h2>
        <Link href="/posts/fourth-step">
     <img
           src="/images/ppmask.jpeg"
           className={`${styles.headerImage} `}
         />
         </Link>>
      </h2>
      </div>
    //{/* </Layout> */}
  )
}