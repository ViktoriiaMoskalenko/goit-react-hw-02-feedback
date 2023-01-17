import PropTypes from 'prop-types';
import styles from './Feedback.module.css'
export const Notification = ({ message }) => {
    return (
        <p className={styles.notifi}>{ message }</p>
    )
}

Notification.prototype = {
    message: PropTypes.string.isRequired
}