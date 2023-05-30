import PropTypes from 'prop-types';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className="statistics-container">
    <p className="statistics-text">Good: {good}</p>
    <p className="statistics-text">Neutral: {neutral}</p>
    <p className="statistics-text">Bad: {bad}</p>
    <p className="statistics-text">Total: {total}</p>
    <p className="statistics-text">Positive feedback: {positivePercentage}%</p>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
