import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';

import css from './FeedbackWidget.module.css';

export const FeedbackWidget = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const stateNames = ['good', 'neutral', 'bad'];
  const stateValues = [good, neutral, bad];

  const handlerClick = e => {
    switch (e.target.id) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        alert('Нема такої опції');
    }
  };

  const countTotalFeedback = () => {
    return stateValues.reduce(
      (accamulator, currentValue) => accamulator + currentValue,
      0
    );
  };

  const countPositiveFeedbacks = () => {
    return `${((100 / countTotalFeedback()) * good).toFixed(2) || '0'}%`;
  };

  return (
    <div className={css.section__wrapper}>
      <h1>Please leave feedback</h1>
      <div className={css.buttons__wrapper}>
        {stateNames.map(item => (
          <FeedbackOptions key={item} id={item} onClick={handlerClick} />
        ))}
      </div>
      <h2>Statistics</h2>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        countTotalFeedback={countTotalFeedback()}
        countPositiveFeedback={countPositiveFeedbacks()}
        message={'There is no feedback'}
      />
    </div>
  );
};
