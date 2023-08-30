import { NamedAPIResource } from "./resource";

/**
 * The internal id and version of an API resource
 */
export interface VersionGameIndex {
  /** The internal id of an API resource within game data */
  game_index: number;
  /** The version relevent to this game index */
  version: NamedAPIResource;
}

/**
 * The flavor text of an API resource
 */
export interface VersionGroupFlavorText {
  /** The localized name for an API resource in a specific language */
  text: string;
  /** The language this name is in */
  language: NamedAPIResource;
  /** The version group which uses this flavor text */
  version_group: NamedAPIResource;
}
