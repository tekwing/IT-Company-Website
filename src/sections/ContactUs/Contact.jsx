import styles from './Contact.module.css';
import { useState } from "react";

function Contact(){
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const handleChange = (event) => {
        setFormData({
        ...formData,
        [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
        const response = await fetch("http://127.0.0.1:8000/api/test-form", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
            alert("Message sent successfully!");
            setFormData({
            name: "",
            email: "",
            message: "",
            });
        } else {
            alert(data.message || "Something went wrong");
        }
        } catch (error) {
        console.error(error);
        alert("Server error");
        }
    };

    return(
        <div className={styles.contact}>
            <h2>Contact Us</h2>

            <div className={styles.container}>
                <div className={styles.left_container}>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Name" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={styles.input} 
                        />

                        <input 
                            type="text" 
                            placeholder="Phone" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={styles.input} 
                        />

                        <input 
                            type="email" 
                            name="email"
                            placeholder="Email" 
                            value={formData.email}
                            onChange={handleChange}
                            className={styles.input} 
                        />

                        <textarea 
                            placeholder="Tell Us" 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={styles.textarea}
                        />

                        <button className={styles.submit_btn}>
                            Send Message
                        </button>
                    </form>
                </div>

                <div className={styles.right_container}>
                    <div className={styles.company_contact}>
                        <h3>Get In Touch</h3>
                        <p>📞 +91 98765 43210</p>
                        <p>✉ company@example.com</p>
                        <p>
                            We would love to hear from you. 
                            Reach out and our team will get back to you soon.
                        </p>
                    </div>

                    <button className={styles.ai_button}>
                        ✨ Chat With AI
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact