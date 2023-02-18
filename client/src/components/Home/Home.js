import React from 'react'
import styles from './Home.module.css'
import img from '../../image/dep.webp'
const Home = () => {
   
    return (
        <div className={styles.pageContainer}>
            
            <section className={styles.hero}>
                <h1>Invoicing for small businesses</h1>
                <div className={styles.paragraph}>
                   
                    <p>Invoicing application made with MongoDB, Express, React & Nodejs</p>
                </div>
                <div className={styles.imgContainer}>
                    <img src={img} alt="invoicing-app"/>
                </div>
            </section>
        </div>
    )
}

export default Home
