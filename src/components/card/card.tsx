import { useContext, useEffect } from "react";
import { ClientContext, usePokemon } from "../../utils";
import { CardWrapper, CardLine, CardAvatarMeta, CardAvatar, CardAvatarImage, CardTitle, CardTitleBadge, FlexRow, CardTableHeader, CardTableBody, PrimaryText, ContentLineDivider, CardContent, SecondaryText } from "./styled";
import { Skeleton } from "../skeleton";
import { Error } from "../error";
import { useDispatch, useSelector } from "react-redux";
import { type RootState, filterSlice } from "../../redux";
import { type InitialFilterState } from "../../redux/types/filter.types";

export interface CarpProps {
  pokemonName: string
}

export const Card = ({ pokemonName }: CarpProps) => {
  const { selectedItems } = useSelector<RootState, InitialFilterState>(
    (state) => state.filterReducer
  )
  const dispatch = useDispatch()
  const mainClient = useContext(ClientContext);
  const { data, isLoading, error } = usePokemon(mainClient, pokemonName)
  useEffect(() => {
    if (data != null) {
      dispatch(filterSlice.actions.pushItems(data.abilities.map(a => a.ability.name)))
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
