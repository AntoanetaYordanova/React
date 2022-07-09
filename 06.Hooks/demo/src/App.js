import './App.css';
import { useState } from 'react';
import CharacterList from './components/CharacterList';
import AuthContext from './contexts/АuthContext';

function App() {
let [count, setCount] = useState(0);

const increase = () => {
  setCount(++count);
}

  return (
   <AuthContext.Provider value={count}>
     <div className="App">
      <p>Counter: {count}</p>
      <button onClick={increase}>Increase</button>
      <CharacterList/>
    </div>
   </AuthContext.Provider>
  );
}

export default App;
