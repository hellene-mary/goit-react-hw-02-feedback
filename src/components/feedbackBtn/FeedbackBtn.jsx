import css from './FeedbackBtn.module.css';

export const Feedback = () => {
    return (
        <>
            <h1>Please leave feedback!</h1>
            <div className={css.feedbackBtnBox}>
                <button className={css.feedbackBtn}>Good</button>
                <button className={css.feedbackBtn}>Neutral</button>
                <button className={css.feedbackBtn}>Bad</button>
            </div>
        </>
    );
};
