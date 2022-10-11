import css from './FeedbackSelect.module.css';

export const FeedbackSelect = ({ goodFeedbackСounts, neutralFeedbackСounts, badFeedbackСounts }) => {
    return (
        <div className={css.feedbackBtnBox}>
            {/* key={} */}
            <button type="button" onClick={goodFeedbackСounts}>
                Good
            </button>
            <button type="button" onClick={neutralFeedbackСounts}>
                Neutral
            </button>
            <button type="button" onClick={badFeedbackСounts}>
                Bad
            </button>
        </div>
    );
};
