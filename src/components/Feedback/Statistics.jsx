import PropTypes from 'prop-types';
import styles from './Feedback.module.css'

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <ul className={styles.list}>
            <li className={styles.item}>Good: { good }</li>
            <li className={styles.item}>Neutral: { neutral }</li>
            <li className={styles.item}>Bad: { bad }</li>
            <li className={styles.item}>Total: {total(good, neutral, bad)}</li>
            <li className={styles.item}>Positive feedback: { Math.round(positivePercentage(good, total(good, neutral, bad))) }%</li>
        </ul>
    )
}

Statistics.prototype = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired
}