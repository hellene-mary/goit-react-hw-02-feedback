import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad }) => {
    return (
        <>
            <h2 className={css.statisticsTitle}>Statistics</h2>
            <div>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
            </div>
        </>
    );
};
