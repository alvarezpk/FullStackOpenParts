

const Persons = ({ persons }) => {
    return (
      <div>
        <h2>Numbers</h2>
        {persons.map(person =>
          <div key={person.name}>
            <p>{person.name} {person.number}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default Persons;