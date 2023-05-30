import PropTypes from 'prop-types';
const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className="feedback-options-container">
    {options.map(option => (
      <button
        key={option}
        onClick={() => onLeaveFeedback(option)}
        className="feedback-btn"
        type="button"
        name={option}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
