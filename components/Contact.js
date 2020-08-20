
import styles from '../styles/Index.module.css'
import { FieldGroup } from '../components/FieldGroup';

export function Contact({ personal }) {
  return (
    <div className={styles.section}>
      <div className={styles.sectionHeading}>
        Contact
    </div>
      <FieldGroup name="Address" value={`${personal.address.city}, ${personal.address.state}, ${personal.address.zipcode}`} />
      <FieldGroup name="Phone" value={`${personal.phone}`} />
      <FieldGroup name="E-mail" value={`${personal.email}`} />
    </div>
  )
}