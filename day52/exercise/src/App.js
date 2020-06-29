import React from 'react';
import logo from './logo.svg';
import Counter from './components/Counter';
import Clock from './components/Clock';
import LeaderBoard from './components/LeaderBoard';

import Questioner from './components/Questioner';
import './App.css';

function App() {
  return (
    <div>
    <LeaderBoard  />
    <Clock/>
    <Questioner question='who is your father'/>
    </div>
  );
}

export default App;
