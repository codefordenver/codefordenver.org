import React from 'react';
import { AppRouter } from './components/Router';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};

export default App;
