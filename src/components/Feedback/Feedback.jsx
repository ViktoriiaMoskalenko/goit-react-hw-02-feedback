import React, {Component} from 'react'

import { FeedbackOptions } from './FeedbackOptions'
import { Section } from './Section';
import { Statistics } from './Statistics'
import { Notification } from './Notification'
import styles from './Feedback.module.css'

export class Feedback extends Component {
    static defaultProps = {
        total: 0,
    };

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    addFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
    };
    countTotalFeedback = (good, neutral, bad) => {
        return (good + neutral + bad)
    }
    countPositiveFeedbackPercentage = (good, total) => {
        return ((good / total) * 100)
    }
    render() {
        const { good, neutral, bad } = this.state
        if (!good && !neutral && !bad) {
            return (
            <div className={styles.wrapper}>
               
                
                <Section title = "Please leave feedback"></Section>
                    <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.addFeedback}></FeedbackOptions>
                     <Notification message="There is no feedback"></Notification>
            
               
            </div>
    )
        } else {
            return (
            <div className={styles.wrapper}>
             
                <Section title = "Please leave feedback"></Section>
                    <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.addFeedback}></FeedbackOptions>
            
                <Section title = "Statistics"></Section>
                    <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={this.countTotalFeedback}
                    positivePercentage={this.countPositiveFeedbackPercentage}></Statistics>
            </div>
    )
        }
    }
 }
