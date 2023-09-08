import { useContext, useEffect } from "react";
import { ClientContext, usePokemon } from "../../utils";
import { CardWrapper, CardLine, CardAvatarMeta, CardAvatar, CardAvatarImage, CardTitle, CardTitleBadge, FlexRow, CardTableHeader, CardTableBody, PrimaryText, ContentLineDivider, CardContent, SecondaryText } from "./styled";
import { Skeleton } from "../skeleton";
import { Error } from "../error";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export interface CarpProps {
  pokemonName: string
}

export const Card = ({ pokemonName }: CarpProps) => {
  const { selectedItems } = useTypedSelector(state => state.filterReducer)
  const { pushItems } = useActions()
  const mainClient = useContext(ClientContext);
  const { data, isLoading, error } = usePokemon(mainClient, pokemonName)
  useEffect(() => {
    if (data != null) {
      pushItems(data.abilities.map(a => a.ability.name))
    }
  }, [data])
  return <CardWrapper>
    {isLoading ?? <Skeleton />}
    {error ? <Error error={error} /> : null}
    {data && (selectedItems.length === 0 || data.abilities.some(a => selectedItems.includes(a.ability.name)))
      ? <CardContent>
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
        {data.abilities.map(a => <span key={a.ability.url}><SecondaryText>#{a.slot}</SecondaryText> <PrimaryText>{a.ability.name}</PrimaryText> </span>)}
      </CardTableBody>
      <ContentLineDivider />
      <CardLine><PrimaryText>Base experience:</PrimaryText> <SecondaryText>{data.base_experience}</SecondaryText></CardLine>
      <CardLine>
        <PrimaryText>Height:</PrimaryText> <SecondaryText>{data.height}</SecondaryText>{' '}
        <PrimaryText>Weight:</PrimaryText> <SecondaryText>{data.weight}</SecondaryText>
      </CardLine>
      <CardLine><PrimaryText>Species:</PrimaryText> <SecondaryText>{data.species.name}</SecondaryText></CardLine>
      <ContentLineDivider />
      <CardTableHeader>Stats</CardTableHeader>
      <CardTableBody>
        {data.stats.map(s => <CardLine key={s.stat.url}><SecondaryText>{s.stat.name}</SecondaryText> - <PrimaryText>{s.base_stat}</PrimaryText></CardLine>)}
      </CardTableBody>
    </CardContent>
      : null}
  </CardWrapper>
};
