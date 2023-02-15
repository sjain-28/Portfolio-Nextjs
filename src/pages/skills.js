import { SiBootstrap, SiCheckio, SiCss3, SiExpress, SiFirebase, SiGit, SiHtml5, SiJavascript, SiMaterialui, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiPug, SiReact, SiRedux, SiTailwindcss, SiVercel } from "react-icons/si";
import styles from '@/styles/Skills.module.css'
const Skills = () => {
    return (
        <div>
            <section className={`${styles.skills} ${styles.section}`} id="skills">
                <h2 className={styles.section__title}>Skills</h2>
                <span className={styles.section__subtitle}>
                    My Technical Level
                </span>
                <div className={`${styles.skills__container} ${styles.container} ${styles.grid}`}>
                    <div className={styles.skills__content}>
                        <span className={styles.border}></span>
                        <span className={styles.border}></span>
                        <span className={styles.border}></span>
                        <span className={styles.border}></span>
                        <h3 className={styles.skills__title}>Frontend</h3>
                        <div className={styles.skills__box}>
                            <div className={styles.skills__group}>
                                <div className={styles.skills__data}>
                                    <SiHtml5 />
                                    <div>
                                        <h3 className={styles.skills___name}>HTML</h3>
                                        <span className={styles.skills__level}>Experienced</span>
                                    </div>
                                </div>
                                <div className={styles.skills__data}>
                                    <SiCss3 />
                                    <div>
                                        <h3 className={styles.skills___name}>CSS</h3>
                                        <span className={styles.skills__level}>Experienced</span>
                                    </div>
                                </div>
                                <div className={styles.skills__data}>
                                    <SiJavascript />
                                    <div>
                                        <h3 className={styles.skills___name}>JavaScript</h3>
                                        <span className={styles.skills__level}>Experienced</span>
                                    </div>
                                </div>
                                <div className={styles.skills__data}>
                                    <SiRedux />
                                    <div>
                                        <h3 className={styles.skills___name}>Redux</h3>
                                        <span className={styles.skills__level}>Experienced</span>
                                    </div>
                                </div>
                                <div className={styles.skills__data}>
                                    <SiMaterialui />
                                    <div>
                                        <h3 className={styles.skills___name}>MaterilalUI</h3>
                                        <span className={styles.skills__level}>Experienced</span>
                                    </div>
                                </div>

                            </div>
                            <div className={styles.skills__group}>
                                <div className={styles.skills__data}>
                                    <SiReact />
                                    <div>
                                        <h3 className={styles.skills___name}>React Js</h3>
                                        <span className={styles.skills__level}>Experienced</span>
                                    </div>
                                </div>
                                <div className={styles.skills__data}>
                                    <SiNextdotjs />
                                    <div>
                                        <h3 className={styles.skills___name}>Next Js</h3>
                                        <span className={styles.skills__level}>Intermediate</span>
                                    </div>
                                </div>
                                <div className={styles.skills__data}>
                                    <SiTailwindcss />
                                    <div>
                                        <h3 className={styles.skills___name}>Tailwind CSS</h3>
                                        <span className={styles.skills__level}>Experienced</span>
                                    </div>
                                </div>
                                <div className={styles.skills__data}>
                                    <SiBootstrap />
                                    <div>
                                        <h3 className={styles.skills___name}>Bootstrap</h3>
                                        <span className={styles.skills__level}>Experienced</span>
                                    </div>
                                </div>
                                <div className={styles.skills__data}>
                                    <SiGit />
                                    <div>
                                        <h3 className={styles.skills___name}>Git</h3>
                                        <span className={styles.skills__level}>Experienced</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={styles.skills__content}>
                        <span className={styles.border}></span>
                        <span className={styles.border}></span>
                        <span className={styles.border}></span>
                        <span className={styles.border}></span>
                        <h3 className={styles.skills__title}>Backend</h3>
                        <div className={styles.skills__box}>
                            <div className={styles.skills__group}>
                                <div className={styles.skills__data}>
                                    <SiNodedotjs />
                                    <div>
                                        <h3 className={styles.skills___name}>Node JS</h3>
                                        <span className={styles.skills__level}>Intermediate</span>
                                    </div>
                                </div>
                                <div className={styles.skills__data}>

                                    <SiExpress />
                                    <div>
                                        <h3 className={styles.skills___name}>Express JS</h3>
                                        <span className={styles.skills__level}>Intermediate</span>
                                    </div>
                                </div>

                                <div className={styles.skills__data}>
                                    <SiMongodb />
                                    <div>
                                        <h3 className={styles.skills___name}>MongoDB</h3>
                                        <span className={styles.skills__level}>Intermediate</span>
                                    </div>
                                </div>
                                <div className={styles.skills__data}>
                                    <SiFirebase />
                                    <div>
                                        <h3 className={styles.skills___name}>Firebase</h3>
                                        <span className={styles.skills__level}>Basics</span>
                                    </div>
                                </div>
                                <div className={styles.skills__data}>
                                    <SiVercel />
                                    <div>
                                        <h3 className={styles.skills___name}>Vercel</h3>
                                        <span className={styles.skills__level}>Intermediate</span>
                                    </div>
                                </div>

                            </div>
                            <div className={styles.skills__group}>
                                <div className={styles.skills__data}>
                                    <SiNextdotjs />
                                    <div>
                                        <h3 className={styles.skills___name}>Next Js</h3>
                                        <span className={styles.skills__level}>Intermediate</span>
                                    </div>
                                </div>
                                <div className={styles.skills__data}>
                                    <SiMysql />
                                    <div>
                                        <h3 className={styles.skills___name}>MySQL</h3>
                                        <span className={styles.skills__level}>Experienced</span>
                                    </div>
                                </div>
                                <div className={styles.skills__data}>

                                    <SiCheckio />
                                    <div>
                                        <h3 className={styles.skills___name}>EJS</h3>
                                        <span className={styles.skills__level}>Experienced</span>
                                    </div>
                                </div>
                                <div className={styles.skills__data}>
                                    <SiCheckio />
                                    <div>
                                        <h3 className={styles.skills___name}>API</h3>
                                        <span className={styles.skills__level}>Experienced</span>
                                    </div>
                                </div>
                                <div className={styles.skills__data}>

                                    <SiPug />
                                    <div>
                                        <h3 className={styles.skills___name}>Pug</h3>
                                        <span className={styles.skills__level}>Intermediate</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </div>
    );
}

export default Skills