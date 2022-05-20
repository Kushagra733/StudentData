import './App.css';
import Inputstudent from './components/Inputstudent.js';
import Liststudent from './components/Liststudent.js';
function App() {
  return (
    
      <div >
        <div className="input">
          <Inputstudent/>
        </div>
        <Liststudent/>
      </div>
  );
}

export default App;
