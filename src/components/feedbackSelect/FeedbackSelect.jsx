import PropTypes from 'prop-types';
import css from './FeedbackSelect.module.css';

export const FeedbackSelect = ({ onGoodBtn, onNeutralBtn, onBadBtn }) => {
    return (
        <div className={css.feedbackBtnBox}>
            {/* key={} */}
            <button type="button" onClick={onGoodBtn}>
                Good
            </button>
            <button type="button" onClick={onNeutralBtn}>
                Neutral
            </button>
            <button type="button" onClick={onBadBtn}>
                Bad
            </button>
        </div>
    );
};

FeedbackSelect.propTypes = {
    onGoodBtn: PropTypes.func.isRequired,
    onNeutralBtn: PropTypes.func.isRequired,
    onBadBtn: PropTypes.func.isRequired,
};
