import css from './Statistics.module.css';

export const Statistics = () => {
    return (
        <>
            <h2 className={css.statisticsTitle}>Statistics</h2>
            <div>
                <p>Good: 0</p>
                <p>Neutral: 0</p>
                <p>Bad: 0</p>
            </div>
        </>
    );
};
