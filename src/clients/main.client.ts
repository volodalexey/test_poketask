import { BaseClient, ClientArgs } from "../structures/base";
import { PokemonClient } from "./pokemon.client";

/**
 * ### Main Client
 *
 * The main client used to access all the PokéAPI Endpoints:
 *  - [Pokémon](https://pokeapi.co/docs/v2#pokemon-section)
 * ---
 * See [PokéAPI Documentation](https://pokeapi.co/docs/v2)
 */
export class MainClient extends BaseClient {
  public pokemon: PokemonClient;

  constructor(clientOptions?: ClientArgs) {
    super(clientOptions);

    this.pokemon = new PokemonClient(clientOptions);
  }
}
