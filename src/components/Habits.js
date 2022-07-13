import { useState } from 'react';
import styled from 'styled-components';
import Habit from './Habit';

const Habits = ({ habits, setHabits }) => {
  const incrementHanlder = (name) => {
    // Find target index based on habit name
    const findIndex = habits.findIndex((habit) => habit.name === name);
    // Copy habit array
    const copyArr = [...habits];
    const targetCount = copyArr[findIndex].count;
    // Increase count ++
    copyArr[findIndex] = { ...copyArr[findIndex], count: targetCount + 1 };
    // set habits by using copy arr
    setHabits(copyArr);
  };

  const decrementHanlder = (name) => {
    // Find target index based on habit name
    const findIndex = habits.findIndex((habit) => habit.name === name);
    // Copy habit array
    const copyArr = [...habits];
    const targetCount = copyArr[findIndex].count;
    // Increase count ++
    copyArr[findIndex] = {
      ...copyArr[findIndex],
      count: targetCount <= 0 ? 0 : targetCount - 1,
    };
    // set habits by using copy arr
    setHabits(copyArr);
  };

  const deleteHanlder = (name) => {
    // Find target index based on habit name
    const findIndex = habits.findIndex((habit) => habit.name === name);
    // Copy habit array
    const copyArr = [...habits];
    // Delete target object using splice method
    copyArr.splice(findIndex, 1);
    // Set habits by using copy array
    setHabits(copyArr);
  };

  return (
    <WrapperUl>
      {habits.map((habit) => {
        return (
          <Habit
            key={habit.name}
            habit={habit}
            onIncrement={incrementHanlder}
            onDecrement={decrementHanlder}
            onDelete={deleteHanlder}
          />
        );
      })}
    </WrapperUl>
  );
};

export default Habits;

const WrapperUl = styled.ul``;
