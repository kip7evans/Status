import styles from '../styles/Project.module.scss';
import Title from '../components/reusable/Title';
import { FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  return (
    <div id='projects' className={styles.container}>
      <Title number='03' title="Some Things I've Managed and Deployed" />

      <div
        className={styles.projectWrapper}
        data-aos='fade-down-right'
        data-aos-once={true}
      >
        <div className={styles.projectInfoLeft}>
          {/* <p className={`${styles.projectText} ${styles.textLeft}`}>Featured Project</p> */}
          <p className={`${styles.projectName} ${styles.textLeft}`}>
            Innovatics
          </p>
          <div className={styles.aboutProjectWrapper}>
            <div className={styles.aboutProjectLeft}>
              <p className={styles.aboutProjectTextLeft}>
                Innovatics.ai is a cutting-edge website that focuses on the
                field of artificial intelligence (AI) and innovation. The
                platform provides a wealth of information, resources, and tools
                related to AI, catering to both beginners and experts in the
                field.
              </p>
            </div>
          </div>
          <div className={styles.projectToolsWrapper}>
            <p className={styles.toolText}>Next.js</p>
            <p className={styles.toolText}>Styled-Component</p>
            <p className={styles.toolText}>Firebase</p>
            <p className={styles.toolText}>Github Action</p>
            <p className={styles.toolText}>VPS</p>
          </div>
          <a
            href='https://innovatics.ai'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiExternalLink className={styles.linkIconLeft} />
          </a>
        </div>
        <div className={styles.projectImageRight}>
          {/* <img src="/assets/vsprout3.png" className={styles.projectImage} /> */}
          {/* <div className={styles.overlay}></div> */}
          {/* https://virtuous-sprout.herokuapp.com */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
