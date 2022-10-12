import React, { Component } from 'react';

import css from './Feedback.module.css';
import { FeedbackSelect } from '../feedbackSelect/FeedbackSelect';
import { Statistics } from 'components/statistics/Statistics';

class Feedback extends Component {
    // static defaultProps = {
    //     initialTotal: 0,
    // };

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

    countTotalFeedback() {
        return this.state.good + this.state.neutral + this.state.bad;
    }

    countPositiveFeedbackPercentage() {
        const total = this.countTotalFeedback();
        return Math.round((this.state.good / total) * 100);
    }

    render() {
        const total = this.countTotalFeedback();
        const posFB = this.countPositiveFeedbackPercentage();

        return (
            <>
                <h1 className={css.feedbackTitle}>Please leave feedback!</h1>
                <FeedbackSelect
                    onGoodBtn={this.goodFeedbackСounts}
                    onNeutralBtn={this.neutralFeedbackСounts}
                    onBadBtn={this.badFeedbackСounts}
                />

                <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={total}
                    posFb={posFB}
                />
            </>
        );
    }
}

export default Feedback;
