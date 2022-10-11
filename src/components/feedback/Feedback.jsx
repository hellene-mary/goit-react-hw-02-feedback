import React, { Component } from 'react';
import css from './Feedback.module.css';
import { FeedbackSelect } from '../feedbackSelect/FeedbackSelect';
import { Statistics } from 'components/statistics/Statistics';

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    goodFeedbackСounts = () => {
        this.setState(preState => ({ good: preState.good + 1 }));
    };

    neutralFeedbackСounts = () => {
        this.setState(preState => ({ neutral: preState.neutral + 1 }));
    };

    badFeedbackСounts = () => {
        this.setState(preState => ({ bad: preState.bad + 1 }));
    };

    render() {
        return (
            <>
                <h1 className={css.feedbackTitle}>Please leave feedback!</h1>
                <FeedbackSelect
                    goodFeedbackСounts={this.goodFeedbackСounts}
                    neutralFeedbackСounts={this.neutralFeedbackСounts}
                    badFeedbackСounts={this.badFeedbackСounts}
                />

                <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                />
            </>
        );
    }
}

export default Feedback;
