import styles from './Navbar.module.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar(){
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
    return(
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
            <div> <h2>Company Name</h2></div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><button>
                    <Link to="/contact" className="btn"> 
                    Start a Project
                    </Link>
                    </button>
                </li>
            </ul>
        </nav >
    )
}

export default Navbar