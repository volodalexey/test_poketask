import { ENDPOINTS } from "../constants";
import {
  Ability,
  Pokemon,
  PokemonHabitat,
  NamedAPIResourceList,
} from "../models";
import { BaseClient } from "../structures/base";
import { AxiosError, AxiosResponse } from "axios";

/**
 * ### Pokemon Client
 *
 * Client used to access the Pokemon Endpoints:
 *  - [Abilities](https://pokeapi.co/docs/v2#abilities)
 *  - [Pokemon](https://pokeapi.co/docs/v2#pokemon)
 *  - [Pokemon Habitats](https://pokeapi.co/docs/v2#pokemon-habitats)
 * ---
 * See [PokéAPI Documentation](https://pokeapi.co/docs/v2#pokemon-section)
 */
export class PokemonClient extends BaseClient {
  /**
   * Get an Ability by it's name
   * @param name The Ability name
   * @returns An Ability
   */
  public async getAbilityByName(name: string): Promise<Ability> {
    return new Promise<Ability>((resolve, reject) => {
      this.api
        .get<Ability>(`${ENDPOINTS.ABILITY}/${name}`)
        .then((response: AxiosResponse<Ability>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get an Ability by it's ID
   * @param id The Ability ID
   * @returns An Ability
   */
  public async getAbilityById(id: number): Promise<Ability> {
    return new Promise<Ability>((resolve, reject) => {
      this.api
        .get<Ability>(`${ENDPOINTS.ABILITY}/${id}`)
        .then((response: AxiosResponse<Ability>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get a Pokemon by it's name
   * @param name The Pokemon name
   * @returns A Pokemon Stat
   */
  public async getPokemonByName(name: string): Promise<Pokemon> {
    return new Promise<Pokemon>((resolve, reject) => {
      this.api
        .get<Pokemon>(`${ENDPOINTS.POKEMON}/${name}`)
        .then((response: AxiosResponse<Pokemon>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get a Pokemon by it's ID
   * @param id The Pokemon ID
   * @returns A Pokemon
   */
  public async getPokemonById(id: number): Promise<Pokemon> {
    return new Promise<Pokemon>((resolve, reject) => {
      this.api
        .get<Pokemon>(`${ENDPOINTS.POKEMON}/${id}`)
        .then((response: AxiosResponse<Pokemon>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get a Pokemon Habitat by it's name
   * @param name The Pokemon Habitat name
   * @returns A Pokemon Habitat
   */
  public async getPokemonHabitatByName(name: string): Promise<PokemonHabitat> {
    return new Promise<PokemonHabitat>((resolve, reject) => {
      this.api
        .get<PokemonHabitat>(`${ENDPOINTS.POKEMON_HABITAT}/${name}`)
        .then((response: AxiosResponse<PokemonHabitat>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get a Pokemon Habitat by it's ID
   * @param id The Pokemon Habitat Form ID
   * @returns A Pokemon Habitat
   */
  public async getPokemonHabitatById(id: number): Promise<PokemonHabitat> {
    return new Promise<PokemonHabitat>((resolve, reject) => {
      this.api
        .get<PokemonHabitat>(`${ENDPOINTS.POKEMON_HABITAT}/${id}`)
        .then((response: AxiosResponse<PokemonHabitat>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * List Abilities
   * @param offset The first item that you will get
   * @param limit How many Abilities per page
   * @returns A list of Abilities
   */
  public async listAbilities(offset?: number, limit?: number): Promise<NamedAPIResourceList> {
    return new Promise<NamedAPIResourceList>((resolve, reject) => {
      const url = this.getListURL(ENDPOINTS.ABILITY, offset, limit);
      this.api
        .get<NamedAPIResourceList>(url)
        .then((response: AxiosResponse<NamedAPIResourceList>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * List Pokemons
   * @param offset The first item that you will get
   * @param limit How many Pokemons Stats per page
   * @returns A list of Pokemons
   */
  public async listPokemons(offset?: number, limit?: number): Promise<NamedAPIResourceList> {
    return new Promise<NamedAPIResourceList>((resolve, reject) => {
      const url = this.getListURL(ENDPOINTS.POKEMON, offset, limit);
      this.api
        .get<NamedAPIResourceList>(url)
        .then((response: AxiosResponse<NamedAPIResourceList>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * List Pokemon Habitats
   * @param offset The first item that you will get
   * @param limit How many Pokemon Habitats per page
   * @returns A list of Pokemon Habitats
   */
  public async listPokemonHabitats(offset?: number, limit?: number): Promise<NamedAPIResourceList> {
    return new Promise<NamedAPIResourceList>((resolve, reject) => {
      const url = this.getListURL(ENDPOINTS.POKEMON_HABITAT, offset, limit);
      this.api
        .get<NamedAPIResourceList>(url)
        .then((response: AxiosResponse<NamedAPIResourceList>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }
}
