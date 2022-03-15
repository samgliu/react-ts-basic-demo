import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    first : 'Sam',
    last: 'L'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Clack',
      last: 'Kent',
    },
    {
      first: 'Princess',
      last: 'Diana',
    }
  ]
  return (
    <div className="App">
      <Greet name="Sam" messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
