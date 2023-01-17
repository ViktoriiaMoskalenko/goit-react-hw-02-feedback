import PropTypes from 'prop-types';
import styles from './Feedback.module.css'
export function Section({ title }) {
    return (
            <p className={styles.title}>{title}</p>
    )
}
Section.prototype = {
    title: PropTypes.string.isRequired
}