import styles from './Project.module.css';
import { motion } from "framer-motion";

function Project(){
    const items = [
            {
                heading: 'Cloud-Based Business Platform',
                paragraph:
                    'Empowering businesses with secure and scalable cloud solutions that improve collaboration, accessibility, and operational efficiency.'
            },
            {
                heading: 'AI-Powered Analytics Platform',
                paragraph:
                    'Transforming business data into actionable insights through intelligent analytics, automation, and real-time reporting that helps organizations make smarter decisions and improve performance.'
            },
            {
                heading: 'Enterprise Software Solutions',
                paragraph:
                    'Building reliable and customized software platforms that streamline workflows, enhance productivity, and support business growth through modern digital technologies.'
            },
            {
                heading: 'Digital Transformation Solutions',
                paragraph:
                    'Helping organizations modernize their operations with innovative technologies that increase efficiency, optimize processes, and create new opportunities for growth.'
            },
            {
                heading: 'E-Commerce Technology Platform',
                paragraph:
                    'Developing scalable online commerce solutions that simplify transactions, enhance customer experiences, and enable businesses to grow in the digital marketplace.'
            },
            {
                heading: 'Customer Relationship Management System',
                paragraph:
                    'Creating powerful CRM solutions that help businesses manage customer interactions, improve engagement, and build long-lasting relationships.'
            },
            {
                heading: 'Automation & Workflow Solutions',
                paragraph:
                    'Optimizing business processes through intelligent automation tools that minimize manual effort, improve accuracy, and increase overall productivity.'
            },
            {
                heading: 'Inventory Management System',
                paragraph:
                    'Simplifying inventory tracking with smart management solutions that automate stock monitoring, optimize supply levels, and provide real-time insights to improve operational efficiency.'
            },
            {
                heading: 'POS Billing Systems',
                paragraph:
                    'Building comprehensive POS billing platforms that integrate sales, inventory, customer management, and reporting into a single solution, helping businesses operate more efficiently and scale with confidence.'
            }
        ];
    return(
        <div className={styles.project}>
            <h2>Building Digital Solutions That Matter</h2>
            <p>
                From web applications to advanced software platforms, we create
                scalable and innovative solutions designed to transform ideas into
                impactful digital experiences.
            </p>
            <div className={styles.container}>
                {items.map((item, index) =>(
                <motion.div 
                    key={index}
                    initial={{
                        opacity: 0,
                        x: index >= 3 && index <= 5 ? -100 : 100,
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
                <div className={styles.card_container}>
                    <div className={styles.bottom_card}>
                        <h3>{item.heading}</h3>
                        <div className={styles.top_card}>
                            <p>
                                {item.paragraph}
                            </p>
                        </div>
                    </div>
                </div>
                </motion.div>
                ))}
                
            </div>
        </div>
    )
}

export default Project