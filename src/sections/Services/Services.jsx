import styles from './Services.module.css';
import { FaHome } from "react-icons/fa";
import WebDevelopmentIcon from "../../assets/icons/web_development.png";
import AppDevelopmentIcon from "../../assets/icons/app_development.png";
import CustomDevelopmentIcon from "../../assets/icons/custom_development.png";
import Ui_Ux from "../../assets/icons/ui_ux.png";
import Backend_api_development from "../../assets/icons/backend_api_development.png";
import cloud_deployment from "../../assets/icons/cloud_deployment.png";
import { motion } from "framer-motion";

function Services(){
    const services1 = [
        {
            icon: WebDevelopmentIcon,
            title: "Web Development",
            description: "We create responsive and high-performance websites and web applications that provide seamless user experiences across all devices."
        },
        {
            icon: AppDevelopmentIcon,
            title: "App Development",
            description: "We develop modern mobile applications with smooth performance, intuitive designs, and scalable architecture."
        },
        {
            icon: CustomDevelopmentIcon,
            title: "Custom Software",
            description: "We build software solutions tailored to specific requirements, helping businesses automate processes and improve productivity."
        },
    ];

    const services2 = [
        {
            icon: Ui_Ux,
            title: "UI/UX Development",
            description: "We design clean, engaging, and user-focused interfaces that make digital products simple and enjoyable to use."
        },
        {
            icon: Backend_api_development,
            title: "Backend & Api Development",
            description: "We develop secure backend systems, APIs, and integrations that power reliable applications."
        },
        {
            icon: cloud_deployment,
            title: "Cloud Deployment",
            description: "We help deploy, optimize, and maintain applications using modern cloud technologies."
        },
    ];
    return(
        <div className={styles.services}>
            <h2>What We Do</h2>
            <p>Leading Technology and Innovative Company</p>

            <div className={styles.container}>
                {services1.map((service, index) => (
                    <motion.div
                    key={service.title}
                    className={styles.column}
                    initial={
                        index === 1 || index === 4
                            ? {
                                opacity: 0,
                                y: 100,
                            }
                            : {
                                opacity: 0,
                                x: index === 2 || index === 5 ? 100 : -100,
                            }
                    }
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                    }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{
                        duration: 0.7,
                        delay: index * 0.1,
                    }}
                    >
                    <div className={styles.card}>
                        <img src={service.icon} alt={service.title} />
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                    </motion.div>
                ))}
            </div>

            <div className={styles.container}>
                {services2.map((service, index) => (
                    <motion.div
                    key={service.title}
                    className={styles.column}
                    initial={
                        index === 1 || index === 4
                            ? {
                                opacity: 0,
                                y: 100,
                            }
                            : {
                                opacity: 0,
                                x: index === 2 || index === 5 ? 100 : -100,
                            }
                    }
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                    }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{
                        duration: 0.7,
                        delay: index * 0.1,
                    }}
                    >
                    <div className={styles.card}>
                        <img src={service.icon} alt={service.title} />
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Services