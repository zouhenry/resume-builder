import styles from '../styles/Index.module.css'

function WorkHistoryItem({ record }) {
  return (
    <div key={record.employer + record.title} className={styles.historyItem}>
      <div className={styles.historyLeftPane}>
        <div className={styles.dateContainer} >
          <div className={styles.startEndDate}>
            {record.startDate}
          </div>
          <div style={{ textAlign: 'center' }}>&mdash;</div>
          <div className={styles.startEndDate}>
            {record.endDate ? record.endDate : 'Current'}
          </div>
        </div>
      </div>
      <div className={styles.jobItem}>
        <div className={styles.jobHeading}>
          <div className={styles.employer}>{record.employer}</div>
          <div className={styles.jobTitle}>{record.title}</div>
          <div className={styles.employerAddress}>{record.city}, {record.state}</div>
        </div>
        <ul className={styles.jobAccomplishments}>
          {record.accomplishments.map(accomp => {
            return <li className={styles.jobAccomplishment} key={accomp}>{accomp}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export function WorkHistory({ history }) {
  return (
    <div>
      <div className={styles.historyHeading}>Work History</div>
      {history.map(item => <WorkHistoryItem record={item} />)}
    </div>
  )
}
