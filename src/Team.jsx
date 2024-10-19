import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(11);
  const addHandler = () => {
    const updatedTeam = team + 1;
    setTeam(updatedTeam);
  };

  const removeHandler = () => {
    // team - 1;
    setTeam(team - 1);
  };

  const teamStyles = {
    border: "2px solid red",
    margin: "15px",
    padding: "15px",
    borderRadius: "10px",
  };

  return (
    <div style={teamStyles}>
      <h2>Players : {team}</h2>
      <button onClick={addHandler}>Add</button>
      <button onClick={removeHandler}>Remove</button>
    </div>
  );
}
