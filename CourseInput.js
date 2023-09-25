import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isButtonBlurred, setIsButtonBlurred] = useState(true);

  const goalInputChangeHandler = (event) => {
    const inputValue = event.target.value;
    setEnteredValue(inputValue);

    if (inputValue.trim().length === 0) {
      // If the input is empty, blur the button
      setIsButtonBlurred(true);
    } else if (inputValue.trim().length === 1) {
      // If a single letter is entered, unblur the button
      setIsButtonBlurred(false);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsButtonBlurred(true); // Blur the button if the input is empty
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('');
    setIsButtonBlurred(true); // Blur the button after adding a goal
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${isButtonBlurred ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit" className={isButtonBlurred ? 'blurred-button' : ''}>
        Add Goal
      </Button>
    </form>
  );
};

export default CourseInput;
