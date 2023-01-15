import styles from './Feedback.module.css'
export const Notification = ({ message }) => {
    return (
        <p className={styles.notifi}>{message }</p>
    )
}