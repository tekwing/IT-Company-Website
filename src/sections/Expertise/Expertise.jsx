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

function Expertise(){
    return(
        <div className={styles.expertise}>
            <h2>Our Technology Expertise</h2>
            <p>Leading Technology and Innovative Company</p>

            <div className={styles.container}>
                <div className={styles.card}>
                    <img src={php} alt="PHP" className={styles.image} />
                    <p>PHP</p>
                </div>
                <div className={styles.card}>
                    <img src={react} alt="react" className={styles.image} />
                    <p>React</p>
                </div>
                <div className={styles.card}>
                    <img src={bootstrap} alt="bootstrap" className={styles.image} />
                    <p>Bootstrap</p>
                </div>
                <div className={styles.card}>
                    <img src={javascript} alt="Javascript" className={styles.image} />
                    <p>Javascript</p>
                </div>
                <div className={styles.card}>
                    <img src={jquery} alt="Jquery" className={styles.image} />
                    <p>Jquery</p>
                </div>
                <div className={styles.card}>
                    <img src={python} alt="Python" className={styles.image} />
                    <p>Python</p>
                </div>
                <div className={styles.card}>
                    <img src={mysql} alt="Mysql" className={styles.image} />
                    <p>Mysql</p>
                </div>
                <div className={styles.card}>
                    <img src={mongo} alt="Mongo" className={styles.image} />
                    <p>Mongo</p>
                </div>
                <div className={styles.card}>
                    <img src={docker} alt="Docker" className={styles.image} />
                    <p>Docker</p>
                </div>
                <div className={styles.card}>
                    <img src={java} alt="Java" className={styles.image} />
                    <p>Java</p>
                </div>
                <div className={styles.card}>
                    <img src={nodejs} alt="Node Js" className={styles.image} />
                    <p>Node Js</p>
                </div>
                <div className={styles.card}>
                    <img src={angular} alt="Angular" className={styles.image} />
                    <p>Angular</p>
                </div>
            </div>
        </div>
        
    )
}

export default Expertise