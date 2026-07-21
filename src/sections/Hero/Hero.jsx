import styles from './Hero.module.css'

function Hero(){
    return(
        <section className={styles.hero}>
            <div className={styles.content}>
                <h3>Building Digital Solutions Through Code & Creativity</h3>
                <p>We are a team of passionate developers creating modern websites, mobile applications, and custom software solutions.</p>
                <div className={styles.button_section}>
                    <button className={styles.button_project}>Start a Project</button>
                    <button className={styles.button_work}>Explore Our Work</button>
                </div>
            </div>

            <div className={styles.image}></div>
        </section>
    )
}

export default Hero