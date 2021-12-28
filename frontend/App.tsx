import { useState, useEffect } from 'react';
import './App.css';
import { Button } from './components/Button';
import { TextField } from './components/TextField';
import Person from './generated/dev/hilla/demo/Person';
import { PersonEndpoint } from './generated/endpoints';

function App() {
  const [editing, setEditing] = useState<Person>({});
  const [people, setPeople] = useState<Person[]>([]);

  const updateFirstName = (e: any) => {
    setEditing({ ...editing, firstName: e.target.value });
  };
  const updateLastName = (e: any) => {
    setEditing({ ...editing, lastName: e.target.value });
  };

  const addGreeting = async () => {
    const saved = await PersonEndpoint.save(editing);
    setPeople([...people, saved]);
    setEditing({});
  };

  useEffect(() => {
    const init = async () => setPeople(await PersonEndpoint.findAll());
    init();
  }, []);

  return (
    <div className="App">
      <h1>Hello world!</h1>

      <div className="form">
        <TextField label="First name" value={editing.firstName} oninput={updateFirstName} />
        <TextField label="Last name" value={editing.lastName} oninput={updateLastName} />
        <Button onClick={addGreeting}>Add name</Button>
      </div>

      <h2>Greetings from:</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            {person.firstName} {person.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
