import styles from './Feedback.module.css'
export function Section({ title }) {
    return (
            <p className={styles.title}>{title}</p>
    )
}