import styles from '../styles/Index.module.css'

export function Skills({ skills }) {
  if (!skills) return null;

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeading}>
        Skills
    </div>
      <div className={styles.skillsContainer}>
        {skills.map(skill => {
          return (
            <div key={skill.score + skill.name} className={styles.skill}>
              <div className={styles.skillName}>{skill.name}</div>
              <div className={styles.skillRating}>{skill.score}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}