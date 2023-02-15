import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Portfolio.module.css';

function Portfolio({ project }) {
    return (
        <article className={styles.portfolio__item}>
            <span className={styles.border}></span>
            <span className={styles.border}></span>
            <span className={styles.border}></span>
            <span className={styles.border}></span>
            <div className={styles.portfolio__item__image}>
                <Image src={project.image} alt={project.title} className={styles.img1} />
            </div>
            <h3 className={styles.portfolio__title}>{project.title}</h3>
            <div className={styles.portfolio__item__cta}>
                <div className={styles.title}>
                    <p style={{ color: "whitesmoke", textAlign: "center" }}>{project.title}</p>
                    <p className={styles.description}>{project.description}</p>
                </div>
                <div className={styles.animation}>

                    <div>

                        <Link
                            href={project.links.github}
                            className={styles.btn}
                            target='_blank'
                            rel='noreferrer'
                        >
                            Github
                        </Link>
                    </div>
                    <div>
                        <Link
                            href={project.links.live}
                            className={`${styles.btn} ${styles.btn__primary}`}
                            target='_blank'
                            rel='noreferrer'
                        >
                            Live Demo
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Portfolio;