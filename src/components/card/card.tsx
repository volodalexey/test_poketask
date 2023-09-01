import { useContext } from "react";
import { type NamedAPIResource } from "../../models";
import { ClientContext, usePokemon } from "../../utils";
import { CardWrapper, CardLines, CardLine, CardAvatarMeta, CardAvatar, CardAvatarImage } from "./styled";
import { Skeleton } from "../skeleton";
import { Error } from "../error";

export interface CarpProps {
  resource: NamedAPIResource
}

export const Card = ({ resource }: CarpProps) => {
  const mainClient = useContext(ClientContext);
  const { data, isLoading, error } = usePokemon(mainClient, resource.name)
  return <CardWrapper>
    {isLoading ?? <Skeleton />}
    {error ? <Error error={error} /> : null}
    {data
      ? <CardLines>
        <h3>[{data.id}] {data.name}</h3>
        <CardAvatarMeta>
          <CardAvatar>
            <CardAvatarImage src={data.sprites.front_default ?? ''} />
          </CardAvatar>
        </CardAvatarMeta>
      {data.abilities.map(a => <CardLine>{a.ability.name} [{a.slot}] {a.is_hidden ? 'hidden' : ''}</CardLine>)}
      <CardLine>Base experience: {data.base_experience}</CardLine>
      {data.forms.map(f => <CardLine>{f.name}</CardLine>)}
      {data.game_indices.map(gi => <CardLine>{gi.game_index} {gi.version.name}</CardLine>)}
      <CardLine>Height: {data.height}</CardLine>
      {data.held_items.map(hi => <CardLine>{hi.item.name}</CardLine>)}
      {data.moves.map(m => <CardLine>{m.move.name}</CardLine>)}
      {data.species.name}
      {data.stats.map(s => <CardLine>{s.base_stat} {s.effort} {s.stat.name}</CardLine>)}
      {data.types.map(t => <CardLine>{t.type.name}</CardLine>)}
      <CardLine>weight: {data.weight}</CardLine>
    </CardLines>
      : null}
  </CardWrapper>
};
