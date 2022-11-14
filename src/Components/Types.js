import React from "react";

const pokemonTypes = {
  bugType: (
    <img id="Symbol" src={require(`./Symbols/Bug.jpg`)} alt="Bug Type Symbol" />
  ),
  darkType: (
    <img
      id="Symbol"
      src={require(`./Symbols/Dark.png`)}
      alt="Dark Type Symbol"
    />
  ),
  dragonType: (
    <img
      id="Symbol"
      src={require(`./Symbols/Dragon.png`)}
      alt="Dragon Type Symbol"
    />
  ),
  electricType: (
    <img
      id="Symbol"
      src={require(`./Symbols/Electric.jpg`)}
      alt="Electric Type Symbol"
    />
  ),
  fairyType: (
    <img
      id="Symbol"
      src={require(`./Symbols/Fairy.png`)}
      alt="Fairy Type Symbol"
    />
  ),
  fightingType: (
    <img
      id="Symbol"
      src={require(`./Symbols/Fighting.jpg`)}
      alt="Fighting Type Symbol"
    />
  ),
  fireType: (
    <img
      id="Symbol"
      src={require(`./Symbols/Fire.png`)}
      alt="Fire Type Symbol"
    />
  ),
  flyingType: (
    <img
      id="Symbol"
      src={require(`./Symbols/Flying.png`)}
      alt="Flying Type Symbol"
    />
  ),
  ghostType: (
    <img
      id="Symbol"
      src={require(`./Symbols/Ghost.jpg`)}
      alt="Ghost Type Symbol"
    />
  ),
  grassType: (
    <img
      id="Symbol"
      src={require(`./Symbols/Grass.png`)}
      alt="Grass Type Symbol"
    />
  ),
  groundType: (
    <img
      id="Symbol"
      src={require(`./Symbols/Ground.jpg`)}
      alt="Ground Type Symbol"
    />
  ),
  iceType: (
    <img id="Symbol" src={require(`./Symbols/Ice.png`)} alt="Ice Type Symbol" />
  ),
  normalType: (
    <img
      id="Symbol"
      src={require(`./Symbols/Normal.jpg`)}
      alt="Normal Type Symbol"
    />
  ),
  poisonType: (
    <img
      id="Symbol"
      src={require(`./Symbols/Poison.png`)}
      alt="Poison Type Symbol"
    />
  ),
  psychicType: (
    <img
      id="Symbol"
      src={require(`./Symbols/Psychic.png`)}
      alt="Psychic Type Symbol"
    />
  ),
  rockType: (
    <img
      id="Symbol"
      src={require(`./Symbols/Rock.png`)}
      alt="Rock Type Symbol"
    />
  ),
  steelType: (
    <img
      id="Symbol"
      src={require(`./Symbols/Steel.jpg`)}
      alt="Steel Type Symbol"
    />
  ),
  waterType: (
    <img
      id="Symbol"
      src={require(`./Symbols/Water.png`)}
      alt="Water Type Symbol"
    />
  ),
};
export const pokemonNormal = {
  name: "Normal",
  icon: pokemonTypes.normalType,
  strongAgainst: "-",
  weakAgainst: [
    pokemonTypes.rockType,
    pokemonTypes.steelType,
    pokemonTypes.ghostType,
  ],
  resistantTo: pokemonTypes.ghostType,
  weakTo: pokemonTypes.fightingType,
};
export const pokemonFighting = {
  name: "Fighting",
  icon: pokemonTypes.fightingType,
  strongAgainst: [
    pokemonTypes.normalType,
    pokemonTypes.rockType,
    pokemonTypes.steelType,
    pokemonTypes.iceType,
    pokemonTypes.darkType,
  ],
  weakAgainst: [
    pokemonTypes.flyingType,
    pokemonTypes.poisonType,
    pokemonTypes.bugType,
    pokemonTypes.psychicType,
    pokemonTypes.fairyType,
    pokemonTypes.ghostType,
  ],
  resistantTo: [
    pokemonTypes.rockType,
    pokemonTypes.bugType,
    pokemonTypes.darkType,
  ],
  weakTo: [
    pokemonTypes.flyingType,
    pokemonTypes.psychicType,
    pokemonTypes.fairyType,
  ],
};
export const pokemonFlying = {
  name: "Flying",
  icon: pokemonTypes.flyingType,
  strongAgainst: [
    pokemonTypes.fightingType,
    pokemonTypes.bugType,
    pokemonTypes.grassType,
  ],
  weakAgainst: [
    pokemonTypes.rockType,
    pokemonTypes.steelType,
    pokemonTypes.electricType,
  ],
  resistantTo: [
    pokemonTypes.fightingType,
    pokemonTypes.bugType,
    pokemonTypes.grassType,
    pokemonTypes.groundType,
  ],
  weakTo: [
    pokemonTypes.rockType,
    pokemonTypes.electricType,
    pokemonTypes.iceType,
  ],
};
export const pokemonPoison = {
  name: "Posion",
  icon: pokemonTypes.poisonType,
  strongAgainst: [pokemonTypes.fairyType, pokemonTypes.grassType],
  weakAgainst: [
    pokemonTypes.poisonType,
    pokemonTypes.groundType,
    pokemonTypes.rockType,
    pokemonTypes.ghostType,
    pokemonTypes.steelType,
  ],
  resistantTo: [
    pokemonTypes.fightingType,
    pokemonTypes.poisonType,
    pokemonTypes.grassType,
    pokemonTypes.fairyType,
  ],
  weakTo: [pokemonTypes.groundType, pokemonTypes.psychicType],
};
export const pokemonGround = {
  name: "Ground",
  icon: pokemonTypes.groundType,
  strongAgainst: [
    pokemonTypes.poisonType,
    pokemonTypes.rockType,
    pokemonTypes.steelType,
    pokemonTypes.fireType,
    pokemonTypes.electricType,
  ],
  weakAgainst: [
    pokemonTypes.bugType,
    pokemonTypes.grassType,
    pokemonTypes.flyingType,
  ],
  resistantTo: [
    pokemonTypes.rockType,
    pokemonTypes.poisonType,
    pokemonTypes.electricType,
  ],
  weakTo: [
    pokemonTypes.waterType,
    pokemonTypes.grassType,
    pokemonTypes.iceType,
  ],
};
export const pokemonRock = {
  name: "Rock",
  icon: pokemonTypes.rockType,
  strongAgainst: [
    pokemonTypes.flyingType,
    pokemonTypes.bugType,
    pokemonTypes.fireType,
    pokemonTypes.iceType,
  ],
  weakAgainst: [
    pokemonTypes.fightingType,
    pokemonTypes.groundType,
    pokemonTypes.steelType,
  ],
  resistantTo: [
    pokemonTypes.normalType,
    pokemonTypes.flyingType,
    pokemonTypes.poisonType,
    pokemonTypes.fireType,
  ],
  weakTo: [
    pokemonTypes.fightingType,
    pokemonTypes.groundType,
    pokemonTypes.steelType,
    pokemonTypes.waterType,
    pokemonTypes.grassType,
  ],
};
export const pokemonBug = {
  name: "Bug",
  icon: pokemonTypes.bugType,
  strongAgainst: [
    pokemonTypes.grassType,
    pokemonTypes.psychicType,
    pokemonTypes.darkType,
  ],
  weakAgainst: [
    pokemonTypes.fightingType,
    pokemonTypes.flyingType,
    pokemonTypes.poisonType,
    pokemonTypes.ghostType,
    pokemonTypes.steelType,
    pokemonTypes.fireType,
    pokemonTypes.fairyType,
  ],
  resistantTo: [
    pokemonTypes.fightingType,
    pokemonTypes.groundType,
    pokemonTypes.grassType,
  ],
  weakTo: [
    pokemonTypes.flyingType,
    pokemonTypes.rockType,
    pokemonTypes.fireType,
  ],
};
export const pokemonGhost = {
  name: "Ghost",
  icon: pokemonTypes.ghostType,
  strongAgainst: [pokemonTypes.ghostType, pokemonTypes.psychicType],
  weakAgainst: [pokemonTypes.normalType, pokemonTypes.darkType],
  resistantTo: [
    pokemonTypes.poisonType,
    pokemonTypes.bugType,
    pokemonTypes.normalType,
    pokemonTypes.fightingType,
  ],
  weakTo: [pokemonTypes.ghostType, pokemonTypes.darkType],
};

export const pokemonSteel = {
  name: "Steel",
  icon: pokemonTypes.steelType,
  strongAgainst: [
    pokemonTypes.rockType,
    pokemonTypes.iceType,
    pokemonTypes.fairyType,
  ],
  weakAgainst: [
    pokemonTypes.steelType,
    pokemonTypes.fireType,
    pokemonTypes.waterType,
    pokemonTypes.electricType,
  ],
  resistantTo: [
    pokemonTypes.normalType,
    pokemonTypes.flyingType,
    pokemonTypes.rockType,
    pokemonTypes.bugType,
    pokemonTypes.steelType,
    pokemonTypes.grassType,
    pokemonTypes.psychicType,
    pokemonTypes.iceType,
    pokemonTypes.dragonType,
    pokemonTypes.fairyType,
    pokemonTypes.poisonType,
  ],
  weakTo: [
    pokemonTypes.fightingType,
    pokemonTypes.groundType,
    pokemonTypes.fireType,
  ],
};
export const pokemonFire = {
  name: "Fire",
  icon: pokemonTypes.fireType,
  strongAgainst: [
    pokemonTypes.bugType,
    pokemonTypes.steelType,
    pokemonTypes.grassType,
    pokemonTypes.iceType,
  ],
  weakAgainst: [
    pokemonTypes.rockType,
    pokemonTypes.fireType,
    pokemonTypes.waterType,
    pokemonTypes.dragonType,
  ],
  resistantTo: [
    pokemonTypes.bugType,
    pokemonTypes.steelType,
    pokemonTypes.fireType,
    pokemonTypes.iceType,
    pokemonTypes.grassType,
  ],
  weakTo: [
    pokemonTypes.rockType,
    pokemonTypes.waterType,
    pokemonTypes.groundType,
  ],
};
export const pokemonWater = {
  name: "Water",
  icon: pokemonTypes.waterType,
  strongAgainst: [
    pokemonTypes.groundType,
    pokemonTypes.rockType,
    pokemonTypes.fireType,
  ],
  weakAgainst: [
    pokemonTypes.waterType,
    pokemonTypes.grassType,
    pokemonTypes.dragonType,
  ],
  resistantTo: [
    pokemonTypes.steelType,
    pokemonTypes.fireType,
    pokemonTypes.iceType,
    pokemonTypes.waterType,
  ],
  weakTo: [pokemonTypes.grassType, pokemonTypes.electricType],
};
export const pokemonGrass = {
  name: "Grass",
  icon: pokemonTypes.grassType,
  strongAgainst: [
    pokemonTypes.groundType,
    pokemonTypes.rockType,
    pokemonTypes.waterType,
  ],
  weakAgainst: [
    pokemonTypes.flyingType,
    pokemonTypes.poisonType,
    pokemonTypes.bugType,
    pokemonTypes.steelType,
    pokemonTypes.fireType,
    pokemonTypes.grassType,
    pokemonTypes.dragonType,
  ],
  resistantTo: [
    pokemonTypes.groundType,
    pokemonTypes.waterType,
    pokemonTypes.grassType,
    pokemonTypes.electricType,
  ],
  weakTo: [
    pokemonTypes.flyingType,
    pokemonTypes.poisonType,
    pokemonTypes.bugType,
    pokemonTypes.fireType,
    pokemonTypes.iceType,
  ],
};
export const pokemonElectric = {
  name: "Electric",
  icon: pokemonTypes.electricType,
  strongAgainst: [pokemonTypes.flyingType, pokemonTypes.waterType],
  weakAgainst: [
    pokemonTypes.grassType,
    pokemonTypes.electricType,
    pokemonTypes.dragonType,
    pokemonTypes.groundType,
  ],
  resistantTo: [
    pokemonTypes.flyingType,
    pokemonTypes.steelType,
    pokemonTypes.electricType,
  ],
  weakTo: [pokemonTypes.groundType],
};
export const pokemonPsychic = {
  name: "Psychic",
  icon: pokemonTypes.psychicType,
  strongAgainst: [pokemonTypes.fightingType, pokemonTypes.poisonType],
  weakAgainst: [
    pokemonTypes.steelType,
    pokemonTypes.psychicType,
    pokemonTypes.darkType,
  ],
  resistantTo: [pokemonTypes.fightingType, pokemonTypes.psychicType],
  weakTo: [pokemonTypes.bugType, pokemonTypes.ghostType, pokemonTypes.darkType],
};
export const pokemonIce = {
  name: "Ice",
  icon: pokemonTypes.iceType,
  strongAgainst: [
    pokemonTypes.flyingType,
    pokemonTypes.groundType,
    pokemonTypes.grassType,
    pokemonTypes.dragonType,
  ],
  weakAgainst: [
    pokemonTypes.steelType,
    pokemonTypes.fireType,
    pokemonTypes.waterType,
    pokemonTypes.iceType,
  ],
  resistantTo: [pokemonTypes.iceType],
  weakTo: [
    pokemonTypes.fightingType,
    pokemonTypes.fireType,
    pokemonTypes.rockType,
    pokemonTypes.steelType,
  ],
};
export const pokemonDragon = {
  name: "Dragon",
  icon: pokemonTypes.dragonType,
  strongAgainst: [pokemonTypes.dragonType],
  weakAgainst: [pokemonTypes.steelType, pokemonTypes.fairyType],
  resistantTo: [
    pokemonTypes.fireType,
    pokemonTypes.waterType,
    pokemonTypes.grassType,
    pokemonTypes.electricType,
  ],
  weakTo: [
    pokemonTypes.iceType,
    pokemonTypes.dragonType,
    pokemonTypes.fairyType,
  ],
};
export const pokemonDark = {
  name: "Dark",
  icon: pokemonTypes.darkType,
  strongAgainst: [pokemonTypes.ghostType, pokemonTypes.psychicType],
  weakAgainst: [
    pokemonTypes.fightingType,
    pokemonTypes.darkType,
    pokemonTypes.fairyType,
  ],
  resistantTo: [
    pokemonTypes.ghostType,
    pokemonTypes.darkType,
    pokemonTypes.psychicType,
  ],
  weakTo: [
    pokemonTypes.fightingType,
    pokemonTypes.bugType,
    pokemonTypes.fairyType,
  ],
};
export const pokemonFairy = {
  name: "Fairy",
  icon: pokemonTypes.fairyType,
  strongAgainst: [
    pokemonTypes.fightingType,
    pokemonTypes.dragonType,
    pokemonTypes.darkType,
  ],
  weakAgainst: [
    pokemonTypes.poisonType,
    pokemonTypes.steelType,
    pokemonTypes.fireType,
  ],
  resistantTo: [
    pokemonTypes.fightingType,
    pokemonTypes.bugType,
    pokemonTypes.darkType,
    pokemonTypes.dragonType,
  ],
  weakTo: [pokemonTypes.poisonType, pokemonTypes.steelType],
};
export const pokeArray = [
  pokemonNormal,
  pokemonFighting,
  pokemonFlying,
  pokemonPoison,
  pokemonGround,
  pokemonRock,
  pokemonBug,
  pokemonGhost,
  pokemonSteel,
  pokemonFire,
  pokemonWater,
  pokemonGrass,
  pokemonElectric,
  pokemonPsychic,
  pokemonIce,
  pokemonDragon,
  pokemonDark,
  pokemonFairy,
];
export const resetButton = (
  <img
    id="Symbol"
    src={require(`./Symbols/Pokeball.png`)}
    alt="Pokeball icon"
    class="thumbnail"
  />
);
export const pokemonLogo = (
  <img
    id="App-logo"
    src={require(`./Symbols/PokemonGo.png`)}
    alt="Pokemon Go Logo"
  />
);
export default pokemonTypes;
