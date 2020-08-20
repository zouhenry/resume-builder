import styles from '../styles/Index.module.css'

export function Seeking({ seeking }) {
  if (!seeking) return null;

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeading}>
        Seeking
      </div>
      <div className={styles.interestsContainer}>
        {seeking.map(skill => {
          return (
            <div className={styles.skill}>
              <div className={styles.skillName}>{skill}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
