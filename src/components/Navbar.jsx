
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
const Navbar = () => {
    
    return (
        <header className={`${styles.header} ${styles.scroll__header}`}>
            <nav className={`${styles.nav} ${styles.container} `}>
                <Link href="/" className={styles.nav__logo}>Shubham</Link>

                <div className={styles.nav__menu}>
                    <ul className={`${styles.nav__list} ${styles.grid}`}>

                        <li className={styles.nav__item} >
                            <Link href="/" className={styles.nav__link}>


                                Home

                            </Link>
                        </li>


                        <li className={styles.nav__item}>
                            <Link href="/skills" className={styles.nav__link}>

                                Skills

                            </Link>
                        </li>
                        <li className={styles.nav__item}>
                            <Link href="/projects" className={styles.nav__link}>

                                Projects

                            </Link>
                        </li>
                        {/* <li className={styles.nav__item}>
                            <Link href="/qualifications" className={styles.nav__link}>

                                Qualification

                            </Link>
                        </li> */}

                    </ul>

                </div>

            </nav>
        </header>
    );
}

export default Navbar;