import styles from '../styles/Index.module.css'

export function Education({ education }) {
  return (
    <div >
      <div className={styles.historyHeading}>Education</div>
      {
        education.map(item => {
          return (
            <div className={styles.educationContainer} key={item.school + item.startDate + item.endDate}>
              <div className={styles.education}>{item.school} - {item.startDate} to {item.endDate}</div>
              <div className={styles.degree}>{item.degree}</div>
            </div>
          );
        })
      }
    </div>
  )
}
