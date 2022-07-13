import { useState } from 'react';
import styled from 'styled-components';
import Habits from './components/Habits';
import Header from './components/Header';
import NewHabit from './components/NewHabit';
import GlobalStyles from './GlobalStyles';

function App() {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState();

  console.log(habits);
  console.log(newHabit);

  return (
    <Wrapper>
      <GlobalStyles />
      <Header habits={habits} />
      <NewHabit
        habits={habits}
        setHabits={setHabits}
        newHabit={newHabit}
        setNewHabit={setNewHabit}
      />
      <Habits habits={habits} setHabits={setHabits} />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div``;
