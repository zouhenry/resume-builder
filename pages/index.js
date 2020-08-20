import Head from 'next/head'
import styles from '../styles/Index.module.css'
import { Contact } from '../components/Contact';
import { Education } from '../components/Education';
import { NameAndTitle } from '../components/NameAndTitle';
import { Seeking } from '../components/Seeking';
import { Skills } from '../components/Skills';
import { WorkHistory } from '../components/WorkHistory';
import resume from '../config/resume.json';

export default function Viewer() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Resume Viewer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.leftbox}>
        <NameAndTitle
          lastName={resume.personal.lastName}
          firstName={resume.personal.firstName}
          title={resume.personal.title} />
        <Contact personal={resume.personal} />
        <Skills skills={resume.skills} />
        <Seeking seeking={resume.seeking} />
      </div>

      <main className={styles.main}>

        <p className={styles.summary}>
          {resume.summary}
        </p>

        <WorkHistory history={resume.history} />
        <Education education={resume.education} />
        <div className={styles.gitFooter}> This resume was generated from Henry Zou's resume-builder repo: <a className={styles.link} href="https://github.com/zouhenry/resume-builder.git">https://github.com/zouhenry/resume-builder.git</a></div>
      </main>
    </div >
  )
}
