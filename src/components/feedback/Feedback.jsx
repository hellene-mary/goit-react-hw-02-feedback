import css from './Feedback.module.css';
import { FeedbackSelect } from '../feedbackSelect/FeedbackSelect';
import { Statistics } from 'components/statistics/Statistics';

export const Feedback = () => {
    return (
        <>
            <h1 className={css.feedbackTitle}>Please leave feedback!</h1>
            <FeedbackSelect />
            <Statistics />
        </>
    );
};
