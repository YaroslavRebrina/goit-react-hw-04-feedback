import React from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ id, onClick }) => {
  return (
    <button
      className={css.button__option}
      key={id}
      id={id}
      type="button"
      onClick={onClick}
    >
      {id}
    </button>
  );
};

FeedbackOptions.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
