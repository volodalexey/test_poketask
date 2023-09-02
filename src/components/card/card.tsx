import { useContext } from "react";
import { type NamedAPIResource } from "../../models";
import { ClientContext, usePokemon } from "../../utils";
import { CardWrapper, CardLine, CardAvatarMeta, CardAvatar, CardAvatarImage, CardTitle, CardTitleBadge, FlexRow, CardTableHeader, CardTableBody, CardLabel, ContentLineDivider } from "./styled";
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
      ? <>
        <FlexRow>
          <CardAvatarMeta>
            <CardAvatar>
              <CardAvatarImage src={data.sprites.front_default ?? ''} />
            </CardAvatar>
          </CardAvatarMeta>
          <CardTitle>{data.name}<CardTitleBadge>#{data.id}</CardTitleBadge> </CardTitle>
        </FlexRow>
      <CardTableHeader>Abilities</CardTableHeader>
      <CardTableBody>
        {data.abilities.map(a => <>#{a.slot} {a.ability.name} </>)}
      </CardTableBody>
      <ContentLineDivider />
      <CardLine><CardLabel>Base experience:</CardLabel> {data.base_experience}</CardLine>
      <CardLine>
        <CardLabel>Height:</CardLabel> {data.height}{' '}
        <CardLabel>Weight:</CardLabel> {data.weight}
      </CardLine>
      <CardLine><CardLabel>Species:</CardLabel> {data.species.name}</CardLine>
      <ContentLineDivider />
      <CardTableHeader>Stats</CardTableHeader>
      <CardTableBody>
        {data.stats.map(s => <CardLine>{s.stat.name} - <CardLabel>{s.base_stat}</CardLabel></CardLine>)}
      </CardTableBody>
    </>
      : null}
  </CardWrapper>
};
