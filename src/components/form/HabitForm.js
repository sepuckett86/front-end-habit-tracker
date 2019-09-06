import React, { useState } from 'react';
import PropTypes from 'prop-types';

function HabitForm({ handleSubmit }) {
  const [habit, setHabit] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    handleSubmit(habit, description);
  };

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text" 
        placeholder="Name of habit" 
        onChange={({ target }) => setHabit(target.value) }
        value={habit} />
      <input 
        type="text" 
        placeholder="Description" 
        onChange={({ target }) => setDescription(target.value) }
        value={description} />
      <button>Add Habit</button>
    </form>
  );
}

HabitForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default HabitForm;


