import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
        type='text'
        name='title'
        placeholder='Your Post Title' />
        <input
        type='text'
        name='author'
        placeholder='Your Name' />
        <textarea
        name='content'
        placeholder='Your Thoughts' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;