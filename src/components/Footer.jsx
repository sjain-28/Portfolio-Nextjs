import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import styles from '../styles/Footer.module.css';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.footer__container} ${styles.container}`}>
                <h1 className={styles.footer__title}>Shubham</h1>
                <ul className={styles.footer__list}>
                    <li>
                        <Link href="/" className={styles.footer__link}>Home</Link>
                    </li>



                    <li>
                        <Link href="/skills" className={styles.footer__link}>Skills</Link>
                    </li>
                    <li>
                        <Link href="/projects" className={styles.footer__link}>Projects</Link>
                    </li>
                    {/* <li>
                        <Link href="/qualifications" className={styles.footer__link}>Qualification</Link>
                    </li> */}

                </ul>
                <div className={styles.footer__social}>
                    <Link href="https://www.facebook.com/profile.php?id=100009845377292" className={`${styles.footer__social__link} ${styles.facebook}`} target="_blank">
                       <BsFacebook />
                    </Link>
                    <Link href="https://www.linkedin.com/in/shubhamjaindev/" className={`${styles.footer__social__link} ${styles.linkedin}`} target="_blank">
                        <BsLinkedin />
                    </Link>
                    <Link href="https://www.instagram.com/shubham__jain28/" className={`${styles.footer__social__link} ${styles.instagram}`} target="_blank">
                        <BsInstagram />
                    </Link>
                </div>
                <span className={styles.footer__copy}>Created By <Link href="/">Shubham Jain</Link> &copy; | 2023 All rights reserved.</span>

            </div>
        </footer>
    );
}

export default Footer;
