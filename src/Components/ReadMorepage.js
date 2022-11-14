import React from "react";
export default class ReadMore extends React.Component {
  render() {
    return (
      <div>
        <div>
          A casual Pokémon type chart is not enough to win a battle, you need to
          understand the Pokémon battles mechanics which involved many other
          factors to strategically win. Personally, once I have configured my
          Pokémon’s move sets and understand how the types work against each
          other, a simple and quicker reference would be more efficient.
          Because, honestly, I find it difficult to memorise the Types chart.
          <br></br>
          <div>
            If you wish to understand more about Pokémon’s STAB
            (Same-Type-Attack- Bonus), actual effectiveness damage % against
            dual types of Pokémon and more! <br></br>
            <br></br>
            <div className="reference">
              Here are some references:
              <a href="https://pokemondb.net/type">
                <img
                  id="Symbol"
                  src={require(`./Symbols/PokemonDatabase.png`)}
                  alt="Pokemon Logo"
                  class="thumbnail"
                />
              </a>
              <a href="https://sg.portal-pokemon.com/play/pokedex">
                <img
                  id="Symbol"
                  src={require(`./Symbols/Pokedex.png`)}
                  alt="Pokedex img"
                  class="thumbnail"
                />
                Pokedex
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
