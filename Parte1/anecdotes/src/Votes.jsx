

const Votes = ({ votes, selected, handleVote }) => {
    return (
      <div>
        <p>Votos: {votes[selected]}</p>
        <button onClick={handleVote}>Votar</button>
      </div>
    );
  };
  
  export default Votes;