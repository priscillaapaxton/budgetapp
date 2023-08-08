import './App.css';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import { CreateGoal } from '../createGoal/createGoal';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Routes>
        {/* <Route exact path ="/" render={() => ( <CreateGoal /> )}/> */}
        <Route
          element={<CreateGoal />}
          path='/'
          />
      </Routes>
    </div>
  );
}

export default App;
