import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';

import css from './FeedbackWidget.module.css';

export class FeedbackWidget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlerClick = e => {
    this.setState({ [e.target.id]: this.state[e.target.id] + 1 });
  };

  countTotalFeedback = () => {
    const stateValues = Object.values(this.state);
    return stateValues.reduce(
      (accamulator, currentValue) => accamulator + currentValue,
      0
    );
  };

  countPositiveFeedbacks = () => {
    const [good] = Object.values(this.state);

    return `${((100 / this.countTotalFeedback()) * good).toFixed(2) || '0'}%`;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={css.section__wrapper}>
        <h1>Please leave feedback</h1>
        <div className={css.buttons__wrapper}>
          {Object.keys(this.state).map(item => (
            <FeedbackOptions key={item} id={item} onClick={this.handlerClick} />
          ))}
        </div>
        <h2>Statistics</h2>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          countTotalFeedback={this.countTotalFeedback()}
          countPositiveFeedback={this.countPositiveFeedbacks()}
          message={'There is no feedback'}
        />
      </div>
    );
  }
}
