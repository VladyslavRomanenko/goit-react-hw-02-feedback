import { Component } from 'react';
import PropTypes from 'prop-types';
import './Feedback.css';

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

const Section = ({ title, children }) => (
  <div className="section-container">
    <h2 className="section-title">{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Notification = ({ message }) => <p className="notification">{message}</p>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    const { good } = this.state;
    const percentage = (good / total) * 100;
    return Math.round(Math.min(percentage, 100));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    const feedbackOptions = Object.keys(this.state);
    const hasFeedback = totalFeedback > 0;

    return (
      <div className="app-container">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {hasFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
