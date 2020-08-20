import styles from '../styles/Index.module.css'

export function NameAndTitle({ firstName, lastName, title }) {
  return (
    <div className={styles.sectionName}>
      <div className={styles.resumeName}>
        {firstName} {lastName}
      </div>
      <div className={styles.resumeTitle}>
        {title}
      </div>
    </div>
  )
}
