import styled from 'styled-components';

const Habit = ({ habit, onIncrement, onDecrement, onDelete }) => {
  const { name, count } = habit;

  return (
    <Wrapper>
      <HabitName>{name}</HabitName>
      <HabitCount>{count}</HabitCount>
      <AddButton onClick={() => onIncrement(name)}>
        <i className='fa-solid fa-square-plus'></i>
      </AddButton>
      <SubtractButton onClick={() => onDecrement(name)}>
        <i className='fa-solid fa-square-minus'></i>
      </SubtractButton>
      <DeleteButton onClick={() => onDelete(name)}>
        <i className='fa-solid fa-trash-can'></i>
      </DeleteButton>
    </Wrapper>
  );
};

export default Habit;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const HabitName = styled.span`
  width: 200px;
  font-size: 2.5rem;
  padding: 0.5em;
  list-style: none;
`;
const HabitCount = styled.span`
  display: inline-block;
  text-align: center;
  font-size: 2rem;
  width: 2.5rem;
  height: 2.5rem;
  line-height: 2.5rem;
  margin-left: 0.2em;
  margin-right: 0.5em;
  background-color: darkseagreen;
  color: white;
  border-radius: 50%;
`;
const AddButton = styled.button`
  cursor: pointer;
  border: none;
  font-size: 2.5rem;
  margin: 0 0.1em;
  background-color: transparent;
  color: goldenrod;
  &:hover {
    opacity: 0.8;
  }
`;
const SubtractButton = styled.button`
  cursor: pointer;
  border: none;
  font-size: 2.5rem;
  margin: 0 0.1em;
  background-color: transparent;
  color: goldenrod;
  &:hover {
    opacity: 0.8;
  }
`;
const DeleteButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 2rem;
  color: darkred;
`;
