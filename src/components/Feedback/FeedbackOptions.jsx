import PropTypes from 'prop-types';
import styles from './Feedback.module.css'
import { nanoid } from 'nanoid'


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            {options.map(option => (
                <button key = {nanoid()} className={styles.btn} type="button" onClick={() => onLeaveFeedback(option)}>{option}</button>
            ))}

        </div>
    )
}
    
FeedbackOptions.prototype = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}