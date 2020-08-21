import Head from 'next/head'
import { useState, useCallback, useEffect } from 'react';
import styles from '../styles/Index.module.css'
import { Contact } from '../components/Contact';
import { Education } from '../components/Education';
import { NameAndTitle } from '../components/NameAndTitle';
import { Likes } from '../components/Likes';
import { Skills } from '../components/Skills';
import { WorkHistory } from '../components/WorkHistory';
import resume from '../config/resume.json';
import JsonEditor from '../components/JsonEditor';


export default function Viewer() {
  const [resume, setResume] = useState(sampleResume);

  useEffect(() => {
    let resume = localStorage.getItem('resume');
    try {
      resume = JSON.parse(resume);
      setResume(resume)
    } catch (e) {
      setResume(sampleResume)
    }
  }, [setResume])

  const saveResume = useCallback((resume) => {
    setResume(resume);
    localStorage.setItem('resume', JSON.stringify(resume));
  }, [setResume]);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Head>
          <title>Resume Builder</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.leftbox}>
          <NameAndTitle
            lastName={resume.personal.lastName}
            firstName={resume.personal.firstName}
            title={resume.personal.title} />
          <Contact personal={resume.personal} />
          <Skills skills={resume.skills} />
          <Likes likes={resume.likes} />
        </div>

        <main className={styles.main}>

          <p className={styles.summary}>
            {resume.summary}
          </p>

          <WorkHistory history={resume.history} />
          <Education education={resume.education} />
          <div className={styles.gitFooter}> This resume was generated from Henry Zou's resume-builder repo: <a className={styles.link} href="https://github.com/zouhenry/resume-builder.git">https://github.com/zouhenry/resume-builder.git</a></div>
        </main>
      </div>
      <JsonEditor defaultResume={resume} onChange={saveResume} />
    </div>
  )
}
