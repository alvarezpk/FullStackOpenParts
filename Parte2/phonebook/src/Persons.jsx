

const Persons = ({ persons, deletePersoN }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {persons.map(person =>
        <div key={person.name}>
          <p>
            {person.name} {person.number} <button onClick={() => deletePersoN(person.id)}>delete</button>
          </p>
          
        </div>
      )}
    </div>
  );
};

export default Persons;
  