import Portfolio from '../components/Portfolio.jsx';
import uberImg from '../assets/images/uber.png';
import travelImg from '../assets/images/traveladvisor.png';
import cryptoImg from '../assets/images/cryptoworld.png';
import quizHub from "../assets/images/quizhub.png";
import oldPortfolio from "../assets/images/portfolioOld.png";
import newPortfolio from "../assets/images/portfolioNew.png";
import styles from '../styles/Portfolio.module.css';

const projects = [
    {
        id: 1,
        title: 'Crypto World',
        description: 'Crypto World is a cryptocurrency information and news webapp',
        links: {
            github: 'https://github.com/sjain-28/cryptoWorld',
            live: 'https://cryptoworld-28.netlify.app',
        },
        image: cryptoImg,
    },
    {
        id: 2,
        title: 'Travel Advisor',
        description: 'This is a web app which shows information about restaurants and hotels in map',
        links: {
            github: 'https://github.com/sjain-28/Travel-Advisory',
            live: 'https://travel-advisor-28.netlify.app',
        },
        image: travelImg,
    },
    {
        id: 3,
        title: 'Uber clone',
        description: 'This is a clone of uber which shows fare and direction on map',
        links: {
            github: 'https://github.com/sjain-28/uber-next',
            live: 'https://uber-clone-28.netlify.app',
        },
        image: uberImg,
    },
    {
        id: 4,
        title: 'Quiz Hub',
        description: 'A quiz web app which gives you feel like Kaun Banega Crorepati',
        links: {
            github: 'https://github.com/sjain-28/Quiz-Hub',
            live: 'https://quizhub-28.netlify.app',
        },
        image: quizHub,
    },
    {
        id: 5,
        title: 'Old Portfolio',
        description: 'My old portfolio website',
        links: {
            github: 'https://github.com/sjain-28/Portfolio-Old',
            live: 'https://shubhamjain-28.onrender.com/',
        },
        image: oldPortfolio,
    },
    {
        id: 6,
        title: 'New Portfolio',
        description: 'My new portfolio website built using React',
        links: {
            github: 'https://github.com/sjain-28/Portfolio-React',
            live: 'https://shubhamjain-28.netlify.app/',
        },
        image: newPortfolio,
    }
];

const Projects = () => {
    return (
        <section id='projects' className={`${styles.section} ${styles.projects}`}>
            <h2 className={styles.section__title}>Projects</h2>
            <span className={styles.section__subtitle}>
                My Recent works
            </span>


            <div className={`${styles.container} ${styles.portfolio__container}`}>

                {projects.map((item) => (
                    <Portfolio key={item.id} project={item} />
                ))}
            </div>

        </section>
    );
};

export default Projects;