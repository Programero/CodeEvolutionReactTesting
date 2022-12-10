import React from 'react';
import './App.css';
import GetFeedback from './components/GetFeedback';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <GetFeedback />
      <Skills skills={["HTML","CSS","Javascript","React","Angular"]} />
    </div>
  );
}

export default App;
