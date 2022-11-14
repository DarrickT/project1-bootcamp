import React from "react";
import {
  pokeArray,
  pokemonBug,
  pokemonDark,
  pokemonDragon,
  pokemonElectric,
  pokemonFairy,
  pokemonFighting,
  pokemonFire,
  pokemonFlying,
  pokemonGhost,
  pokemonGrass,
  pokemonGround,
  pokemonIce,
  pokemonNormal,
  pokemonPoison,
  pokemonPsychic,
  pokemonRock,
  pokemonSteel,
  pokemonWater,
  resetButton,
} from "./Types";

export default class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonArr: pokeArray,
      newPokemonArr: [],
    };
  }

  bugButton() {
    let newPokemonArr = [];
    newPokemonArr.push(pokemonBug);
    this.setState({
      pokemonArr: newPokemonArr,
    });
  }
  darkButton() {
    let newPokemonArr = [];
    newPokemonArr.push(pokemonDark);
    this.setState({
      pokemonArr: newPokemonArr,
    });
  }
  dragonButton() {
    let newPokemonArr = [];
    newPokemonArr.push(pokemonDragon);
    this.setState({
      pokemonArr: newPokemonArr,
    });
  }

  electricButton() {
    let newPokemonArr = [];
    newPokemonArr.push(pokemonElectric);
    this.setState({
      pokemonArr: newPokemonArr,
    });
  }

  fairyButton() {
    let newPokemonArr = [];
    newPokemonArr.push(pokemonFairy);
    this.setState({
      pokemonArr: newPokemonArr,
    });
  }

  fightingButton() {
    let newPokemonArr = [];
    newPokemonArr.push(pokemonFighting);
    this.setState({
      pokemonArr: newPokemonArr,
    });
  }

  fireButton() {
    let newPokemonArr = [];
    newPokemonArr.push(pokemonFire);
    this.setState({
      pokemonArr: newPokemonArr,
    });
  }

  flyingButton() {
    let newPokemonArr = [];
    newPokemonArr.push(pokemonFlying);
    this.setState({
      pokemonArr: newPokemonArr,
    });
  }

  ghostButton() {
    let newPokemonArr = [];
    newPokemonArr.push(pokemonGhost);
    this.setState({
      pokemonArr: newPokemonArr,
    });
  }

  grassButton() {
    let newPokemonArr = [];
    newPokemonArr.push(pokemonGrass);
    this.setState({
      pokemonArr: newPokemonArr,
    });
  }

  groundButton() {
    let newPokemonArr = [];
    newPokemonArr.push(pokemonGround);
    this.setState({
      pokemonArr: newPokemonArr,
    });
  }

  iceButton() {
    let newPokemonArr = [];
    newPokemonArr.push(pokemonIce);
    this.setState({
      pokemonArr: newPokemonArr,
    });
  }

  normalButton() {
    let newPokemonArr = [];
    newPokemonArr.push(pokemonNormal);
    this.setState({
      pokemonArr: newPokemonArr,
    });
  }

  poisonButton() {
    let newPokemonArr = [];
    newPokemonArr.push(pokemonPoison);
    this.setState({
      pokemonArr: newPokemonArr,
    });
  }

  psychicButton() {
    let newPokemonArr = [];
    newPokemonArr.push(pokemonPsychic);
    this.setState({
      pokemonArr: newPokemonArr,
    });
  }

  rockButton() {
    let newPokemonArr = [];
    newPokemonArr.push(pokemonRock);
    this.setState({
      pokemonArr: newPokemonArr,
    });
  }
  steelButton() {
    let newPokemonArr = [];
    newPokemonArr.push(pokemonSteel);
    this.setState({
      pokemonArr: newPokemonArr,
    });
  }
  waterButton() {
    let newPokemonArr = [];
    newPokemonArr.push(pokemonWater);
    this.setState({
      pokemonArr: newPokemonArr,
    });
  }

  resetButton() {
    this.setState({
      pokemonArr: pokeArray,
    });
  }
  render() {
    return (
      <div class="containertext-center">
        <div class="buttons-container">
          <button
            type="button"
            class="btn btn-outline-dark"
            onClick={() => this.bugButton()}
          >
            {pokemonBug.icon}
            {pokemonBug.name}
          </button>
          <button
            type="button"
            class="btn btn-outline-dark"
            onClick={() => this.darkButton()}
          >
            {pokemonDark.icon}
            {pokemonDark.name}
          </button>
          <button
            type="button"
            class="btn btn-outline-dark"
            onClick={() => this.dragonButton()}
          >
            {pokemonDragon.icon}
            {pokemonDragon.name}
          </button>
          <button
            type="button"
            class="btn btn-outline-dark"
            onClick={() => this.electricButton()}
          >
            {pokemonElectric.icon}
            {pokemonElectric.name}
          </button>
          <button
            type="button"
            class="btn btn-outline-dark"
            onClick={() => this.fairyButton()}
          >
            {pokemonFairy.icon}
            {pokemonFairy.name}
          </button>
          <button
            type="button"
            class="btn btn-outline-dark"
            onClick={() => this.fightingButton()}
          >
            {pokemonFighting.icon}
            {pokemonFighting.name}
          </button>
          <button
            type="button"
            class="btn btn-outline-dark"
            onClick={() => this.fireButton()}
          >
            {pokemonFire.icon}
            {pokemonFire.name}
          </button>
          <button
            type="button"
            class="btn btn-outline-dark"
            onClick={() => this.flyingButton()}
          >
            {pokemonFlying.icon}
            {pokemonFlying.name}
          </button>
          <button
            type="button"
            class="btn btn-outline-dark"
            onClick={() => this.ghostButton()}
          >
            {pokemonGhost.icon}
            {pokemonGhost.name}
          </button>
          <button
            type="button"
            class="btn btn-outline-dark"
            onClick={() => this.grassButton()}
          >
            {pokemonGrass.icon}
            {pokemonGrass.name}
          </button>
          <button
            type="button"
            class="btn btn-outline-dark"
            onClick={() => this.groundButton()}
          >
            {pokemonGround.icon}
            {pokemonGround.name}
          </button>
          <button
            type="button"
            class="btn btn-outline-dark"
            onClick={() => this.iceButton()}
          >
            {pokemonIce.icon}
            {pokemonIce.name}
          </button>
          <button
            type="button"
            class="btn btn-outline-dark"
            onClick={() => this.normalButton()}
          >
            {pokemonNormal.icon}
            {pokemonNormal.name}
          </button>
          <button
            type="button"
            class="btn btn-outline-dark"
            onClick={() => this.poisonButton()}
          >
            {pokemonPoison.icon}
            {pokemonPoison.name}
          </button>
          <button
            type="button"
            class="btn btn-outline-dark"
            onClick={() => this.psychicButton()}
          >
            {pokemonPsychic.icon}
            {pokemonPsychic.name}
          </button>
          <button
            type="button"
            class="btn btn-outline-dark"
            onClick={() => this.rockButton()}
          >
            {pokemonRock.icon}
            {pokemonRock.name}
          </button>
          <button
            type="button"
            class="btn btn-outline-dark"
            onClick={() => this.steelButton()}
          >
            {pokemonSteel.icon}
            {pokemonSteel.name}
          </button>
          <button
            type="button"
            class="btn btn-outline-dark"
            onClick={() => this.waterButton()}
          >
            {pokemonWater.icon}
            {pokemonWater.name}
          </button>
        </div>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Type: </th>
              <th scope="col">Strong against:</th>
              <th scope="col">Weak against: </th>
              <th scope="col">Resistant to:</th>
              <th scope="col">Weak to:</th>
            </tr>
          </thead>
          {this.state.pokemonArr.map((Types) => (
            <tbody>
              <th>
                {Types.icon}
                <p>{Types.name}</p>
              </th>
              <th scope="row">{Types.strongAgainst}</th>
              <th scope="row">{Types.weakAgainst}</th>
              <th scope="row">{Types.resistantTo}</th>
              <th scope="row">{Types.weakTo}</th>
            </tbody>
          ))}
        </table>
        <button
          type="button"
          class="btn btn-outline-light"
          onClick={() => this.resetButton()}
        >
          {resetButton}
          Reset
        </button>
      </div>
    );
  }
}
