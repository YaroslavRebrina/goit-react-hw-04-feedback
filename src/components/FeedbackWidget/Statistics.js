import React from 'react';
import { Notification } from './Notification';
import PropTypes from 'prop-types';

import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedback,
  message,
}) =>
  countTotalFeedback ? (
    <ul className={css.statistic__list}>
      <li key={'good'}>Good:{good}</li>
      <li key={'netural'}>Netural:{neutral}</li>
      <li key={'bad'}>Bad:{bad}</li>
      <li key={'total'}>Total:{countTotalFeedback}</li>
      <li key={'positivePecent'}>Positive feedback:{countPositiveFeedback}</li>
    </ul>
  ) : (
    <Notification message={message} />
  );

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.number.isRequired,
  countPositiveFeedback: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
