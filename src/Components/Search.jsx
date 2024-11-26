import { useState } from "react";

function Search() {
  const [input, setInput] = useState("");
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = async () => {
    if (!input.trim()) return;
    
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`,
    );
    const data = await response.json();
    setPokemon(data);
  };

  return (
    <div className="search">
      <h2>Search a Pokemon by its name or ID number</h2>
      <div className="search-box">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && fetchPokemon()}
        />
        <button onClick={fetchPokemon}>Search</button>
      </div>
      {pokemon && (
        <div className="pokemon-card">
          <h2> {pokemon.name} </h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <img src={pokemon.sprites.back_default} alt={pokemon.name} />
          <p> Height: {pokemon.height} </p>
          <p> Weight: {pokemon.weight} </p>
        </div>
      )}
    </div>
  );
}

export default Search;
