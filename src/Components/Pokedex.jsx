import { useState, useEffect } from "react";
import defaultImage from "../assets/missing-pokemon.png";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=1302",
    );
    const data = await response.json();
    setPokemons(data.results);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  const handleImageError = (e) => {
    e.target.src = defaultImage; // Set the locally stored image as the fallback
  };

  return (
    <div className="pokedex">
      <h2>All Pokemon</h2>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/").filter(Boolean).pop()}.png`}
              alt={pokemon.name}
              onError={handleImageError}
            />
            {pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pokedex;
