import React from "react";
export default class About extends React.Component {
  render() {
    return (
      <div>
        <div>
          This Pokemon Type Chart is referenced from Flint Brenick's Simple
          Pokeon Type Chart.
          <br></br>
          <span style={{ fontStyle: "italic" }} className="italic">
            This Pokemon type chart is intended for casual players who don't
            like the complicated charts.
          </span>
          <br></br>
          <br></br>
          <span>
            Explanation: Pick out the type of Pokemon you're fighting or the
            type of Pokemon you're defending
            <br></br>
            For example: Enemy Pokemon is a Water Type -<br></br>
            <span style={{ fontWeight: "bold" }}>"Weak to:"</span>
            Use these types of Pokemon Moves to deal super effective attacks.
            <br></br>
            <span style={{ fontWeight: "bold" }}>"Resistant to:" </span>
            Using these types of Pokemon Moves will deal "not very effective"
            attacks.
            <br></br>
            <span style={{ fontWeight: "bold" }}>"Weak against:" </span>
            Use Pokemons of these types to defend against a Water Type, so the
            enemy hopefully deals "not very effective" attacks.
            <br></br>
            <span style={{ fontWeight: "bold" }}>"Strong against:" </span>
            Using these types of Pokemons, will have the enemy - Water Type - to
            deal super effective attacks against you.
          </span>
        </div>
      </div>
    );
  }
}
