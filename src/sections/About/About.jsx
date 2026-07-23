import styles from './About.module.css'
import { motion } from "framer-motion";

function About(){
    return(
        <div className={styles.about}>
            <motion.div 
                key="1"
                initial={{
                    opacity: 0,
                    x: -100,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                    duration: 0.7,
                }}
            >
                <div className={styles.left_container}>
                    <div className={styles.aboutBox}>
                    <span className={styles.tag}>About Us</span>

                    <h2>Building Digital Solutions That Drive Growth</h2>

                    <p>
                        We help businesses transform their ideas into modern digital
                        experiences. Our team specializes in creating scalable, user-friendly,
                        and innovative solutions tailored to your business needs.
                    </p>

                    <div className={styles.stats}>
                        <div>
                        <h3>100+</h3>
                        <p>Projects Completed</p>
                        </div>

                        <div>
                        <h3>50+</h3>
                        <p>Happy Clients</p>
                        </div>
                    </div>

                    <button className={styles.btn}>Learn More</button>
                    </div>
                </div>
            </motion.div>

            <motion.div 
                key="1"
                initial={{
                    opacity: 0,
                    x: 100,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                    duration: 0.7,
                }}
            >
                <div className={styles.right_container}>
                    <div className={styles.valueCard}>
                        <h3>🚀 Innovation</h3>
                        <p>Building modern and scalable digital solutions.</p>
                    </div>

                    <div className={styles.valueCard}>
                        <h3>🤝 Trust</h3>
                        <p>Strong relationships through transparency.</p>
                    </div>

                    <div className={styles.valueCard}>
                        <h3>⭐ Quality</h3>
                        <p>Delivering products with attention to detail.</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default About