import { useCallback, useEffect } from "react";
import { Filter } from "../../components/filter";
import { Error } from "../../components/error";
import { List } from "../../components/list";
import { Pagination } from "../../components/pagination";
import { Spinner } from "../../components/spinner";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useGetPokemonsQuery } from "../../redux";

export const HomePage = () => {
  const { setOffset, setItems } = useActions()
  const { offset, limit } = useTypedSelector(
    state => state.pokemonsListReducer
  )
  const { data, isLoading, error } = useGetPokemonsQuery({ offset, limit });

  const onSetPage = useCallback((offset: number) => {
    setOffset(offset)
    setItems([])
  }, [])

  return (
    <div>
      <Filter />
      {error ? <Error error={error} /> : null}
      <Spinner isLoading={isLoading} />
      <List data={data} isLoading={isLoading} />
      <Pagination offset={offset} limit={limit} count={data?.count} setOffset={onSetPage} />
    </div>
  );
};
