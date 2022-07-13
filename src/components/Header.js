import styled from 'styled-components';

const Header = ({ habits }) => {
  // Calculate the total count from the habits with count greater than 0
  const count = habits.filter((habit) => habit.count > 0);
  const countTotal = count.length;
  return (
    <Wrapper>
      <Logo>
        <i className='fa-solid fa-person-through-window'></i>
      </Logo>

      <Title>Habit Tracker</Title>
      <HabitCount>{countTotal}</HabitCount>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  font-size: 2rem;
  padding: 1em;
  background-color: blanchedalmond;
  display: flex;
  align-items: center;
`;

const Logo = styled.span`
  color: green;
  margin-right: 1rem;
`;
const Title = styled.span`
  margin-right: 1rem;
`;
const HabitCount = styled.span`
  display: inline-block;
  text-align: center;
  font-size: 2rem;
  width: 2.5rem;
  height: 2.5rem;
  line-height: 2.5rem;
  margin-left: 0.2em;
  background-color: green;
  color: white;
  border-radius: 50%;
`;
