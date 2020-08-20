import styles from '../styles/Index.module.css'

export function Likes({ likes }) {
  if (!likes) return null;

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeading}>
        Likes
      </div>
      <div className={styles.interestsContainer}>
        {likes.map(like => {
          return (
            <div className={styles.skill}>
              <div className={styles.skillName}>{like}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
