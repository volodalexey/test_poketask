import { useCallback, useContext, useEffect } from "react";
import { useSelector } from "react-redux"
import { Filter } from "../../components/filter";
import { Error } from "../../components/error";
import { List } from "../../components/list";
import { Pagination } from "../../components/pagination";
import { useListPokemons } from "../../utils/srw.hooks";
import { ClientContext } from "../../utils/client.context";
import { type RootState, type IPokemonsListState } from "../../redux";
import { Spinner } from "../../components/spinner";
import { useActions } from "../../hooks/useActions";

export const HomePage = () => {
  const { setResults, setNext, setPrevious, setCount, setOffset, setItems } = useActions()
  const mainClient = useContext(ClientContext);
  const { offset, limit, count } = useSelector<RootState, IPokemonsListState>(
    (state) => state.pokemonsListReducer
  )
  const { data, isLoading, error } = useListPokemons(mainClient, offset, limit)
  useEffect(() => {
    if (data != null) {
      setResults(data.results)
      setNext(data.next)
      setPrevious(data.previous)
      setCount(data.count)
    }
  }, [data, isLoading, offset, limit, count])

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
      <Pagination offset={offset} limit={limit} count={count} setOffset={onSetPage} />
    </div>
  );
};
