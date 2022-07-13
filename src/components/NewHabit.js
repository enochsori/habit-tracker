import { useEffect } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';

const NewHabit = ({ habits, setHabits, newHabit, setNewHabit }) => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const newHabitHanlder = (event) => {
    event.preventDefault();
    if (newHabit !== null) {
      setHabits([...habits, { name: newHabit, count: 0 }]);
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  };

  const userInputHandler = (event) => {
    setNewHabit(event.target.value);
  };

  return (
    <Wrapper>
      <AddInput ref={inputRef} type='text' onChange={userInputHandler} />
      <AddButton onClick={newHabitHanlder}>Add</AddButton>
    </Wrapper>
  );
};

export default NewHabit;

const Wrapper = styled.form`
  padding: 1em;
  display: flex;
  align-items: center;
`;
const AddInput = styled.input`
  font-size: 2rem;
  margin-right: 0.2rem;
`;
const AddButton = styled.button`
  height: 100%;
  font-size: 1.5rem;
  padding: 0.3em 0.5em;
  background-color: green;
  color: white;
  border: none;
  border-radius: 10%;
  cursor: pointer;
`;
