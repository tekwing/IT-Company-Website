import styles from './Project.module.css';

function Project(){
    return(
        <div className={styles.project}>
            <h2>Building Digital Solutions That Matter</h2>
            <p>
                From web applications to advanced software platforms, we create
                scalable and innovative solutions designed to transform ideas into
                impactful digital experiences.
            </p>
            <div className={styles.container}>
                <div className={styles.card_container}>
                    <div className={styles.bottom_card}>
                        <h3>Cloud-Based Business Platform</h3>
                        <div className={styles.top_card}>
                            <p>
                                Empowering businesses with secure and scalable cloud solutions that
                                improve collaboration, accessibility, and operational efficiency.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.card_container}>
                    <div className={styles.bottom_card}>
                        <h3>AI-Powered Analytics Platform</h3>
                        <div className={styles.top_card}>
                            <p>
                                Transforming business data into actionable insights through intelligent analytics, automation, 
                                and real-time reporting that helps organizations make smarter decisions and improve performance.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.card_container}>
                    <div className={styles.bottom_card}>
                        <h3>Enterprise Software Solutions</h3>
                        <div className={styles.top_card}>
                            <p>
                                Building reliable and customized software platforms that streamline workflows, 
                                enhance productivity, and support business growth through modern digital technologies.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.card_container}>
                    <div className={styles.bottom_card}>
                        <h3>Digital Transformation Solutions</h3>
                        <div className={styles.top_card}>
                            <p>
                                Helping organizations modernize their operations with innovative technologies that increase efficiency, 
                                optimize processes, and create new opportunities for growth.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.card_container}>
                    <div className={styles.bottom_card}>
                        <h3>E-Commerce Technology Platform</h3>
                        <div className={styles.top_card}>
                            <p>
                                Developing scalable online commerce solutions that simplify transactions, enhance customer experiences, 
                                and enable businesses to grow in the digital marketplace.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.card_container}>
                    <div className={styles.bottom_card}>
                        <h3>Customer Relationship Management System</h3>
                        <div className={styles.top_card}>
                            <p>
                                Creating powerful CRM solutions that help businesses manage customer interactions, 
                                improve engagement, and build long-lasting relationships.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.card_container}>
                    <div className={styles.bottom_card}>
                        <h3>Automation & Workflow Solutions</h3>
                        <div className={styles.top_card}>
                            <p>
                                Optimizing business processes through intelligent automation tools that minimize manual effort, 
                                improve accuracy, and increase overall productivity.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.card_container}>
                    <div className={styles.bottom_card}>
                        <h3>Inventory Management System</h3>
                        <div className={styles.top_card}>
                            <p>
                                Simplifying inventory tracking with smart management solutions that automate stock monitoring, optimize supply levels, 
                                and provide real-time insights to improve operational efficiency.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className={styles.card_container}>
                    <div className={styles.bottom_card}>
                        <h3>POS Billing Systems</h3>
                        <div className={styles.top_card}>
                            <p>
                                Building comprehensive POS billing platforms that integrate sales, inventory, customer management, and reporting into a single solution, 
                                helping businesses operate more efficiently and scale with confidence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project