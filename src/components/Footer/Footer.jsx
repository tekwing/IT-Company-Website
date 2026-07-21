import styles from './Footer.module.css';
function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>

                <div className={styles.brand}>
                    <h2>YourCompany</h2>
                    <p>
                        Building smart solutions with technology and innovation.
                    </p>
                </div>


                <div className={styles.links}>
                    <h3>Quick Links</h3>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                </div>


                <div className={styles.contact_info}>
                    <h3>Contact</h3>
                    <p>📞 +91 98765 43210</p>
                    <p>✉ company@example.com</p>
                    <p>📍 Kerala, India</p>
                </div>


                <div className={styles.social}>
                    <h3>Follow Us</h3>
                    <div className={styles.social_icons}>
                        <span>Facebook</span>
                        <span>Instagram</span>
                        <span>LinkedIn</span>
                    </div>
                </div>

            </div>


            <div className={styles.bottom}>
                <p>
                    © {new Date().getFullYear()} YourCompany. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;