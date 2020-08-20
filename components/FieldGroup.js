import styles from '../styles/Index.module.css'

export function FieldGroup({ name, value }) {
  return (
    <div className={styles.field}>
      <div className={styles.fieldName}>{name}</div>
      <div className={styles.fieldValue}>{value}</div>
    </div>
  )
}
