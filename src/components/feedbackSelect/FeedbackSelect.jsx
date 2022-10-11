import css from './FeedbackSelect.module.css';

export const FeedbackSelect = () => {
    return (
        <div className={css.feedbackBtnBox}>
            {/* key={} */}
            <button className={css.feedbackBtn} key={'btn-good'}>
                Good
            </button>
            <button className={css.feedbackBtn} key={'btn-neutral'}>
                Neutral
            </button>
            <button className={css.feedbackBtn} key={'btn-bad'}>
                Bad
            </button>
        </div>
    );
};
