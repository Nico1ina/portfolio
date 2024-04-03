/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-img-element */

import styles from './Cool.module.scss'

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <div className={styles.card}>
          <img className={styles.img} src='./assets/01.jpg' alt='' />
          <div className={styles.copy}>
            <h1 className={styles.h1}>Youwe</h1>
            <a href='https://youtube.com'>GO HERE</a>
          </div>
        </div>
        <div className={styles.card}>
          <img className={styles.img} src='./assets/02.jpg' alt='' />
          <div className={styles.copy}>
            <h1 className={styles.h1}>Edugrade</h1>
          </div>
        </div>
        <div className={styles.card}>
          <img className={styles.img} src='./assets/03.jpg' alt='' />
          <div className={styles.copy}>
            <h1 className={styles.h1}>Github</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
