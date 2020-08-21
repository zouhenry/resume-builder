import styles from '../styles/Index.module.css'

export function Likes({ likes }) {
  if (!likes) return null;

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeading}>
        Likes
      </div>
      <div>
        {likes.map(like => {
          return (
            <div key={like} className={styles.skill}>
              <div className={styles.skillName}>{like}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
