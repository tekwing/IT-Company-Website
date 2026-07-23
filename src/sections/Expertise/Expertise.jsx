import styles from './Expertise.module.css';
import php from "../../assets/technologies/php.png";
import react from "../../assets/technologies/react.png";
import bootstrap from "../../assets/technologies/bootstrap.png";
import javascript from "../../assets/technologies/javascript.png";
import jquery from "../../assets/technologies/jquery.png";
import python from "../../assets/technologies/python.png";
import mysql from "../../assets/technologies/mysql.png";
import mongo from "../../assets/technologies/mongo.png";
import docker from "../../assets/technologies/docker.png";
import java from "../../assets/technologies/java.png";
import nodejs from "../../assets/technologies/nodejs.png";
import angular from "../../assets/technologies/angular.png";
import { motion } from "framer-motion";


function Expertise(){
   const items = [
        {
            icon: php,
            name: "PHP",
        },
        {
            icon: react,
            name: "React",
        },
        {
            icon: bootstrap,
            name: "Bootstrap",
        },
        {
            icon: javascript,
            name: "Javascript",
        },
        {
            icon: jquery,
            name: "Jquery",
        },
        {
            icon: python,
            name: "Python",
        },
        {
            icon: mysql,
            name: "Mysql",
        },
        {
            icon: mongo,
            name: "Mongo",
        },
        {
            icon: docker,
            name: "Docker",
        },
        {
            icon: java,
            name: "Java",
        },
        {
            icon: nodejs,
            name: "Node Js",
        },
        {
            icon: angular,
            name: "Angular",
        },
    ];
    return(
        <div className={styles.expertise}>
            <h2>Our Technology Expertise</h2>
            <p>Leading Technology and Innovative Company</p>

            <div className={styles.container}>
                {items.map((item)=>(
                    <motion.div
                        key= "1"
                        initial={{
                            opacity: 0,
                            scale: 0.2,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                        }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{
                            duration: 0.7,
                            ease: "easeIn",
                        }}>
                        <div className={styles.card}>
                            <img src={item.icon} alt={item.name} className={styles.image} />
                            <p>{item.name}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
        
    )
}

export default Expertise