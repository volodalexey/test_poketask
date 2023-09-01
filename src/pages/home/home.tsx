import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Filter } from "../../components/filter";
import { Error } from "../../components/error";
import { List } from "../../components/list";
import { Pagination } from "../../components/pagination";
import { useListPokemons } from "../../utils/srw.hooks";
import { ClientContext } from "../../utils/client.context";
import { type RootState, type IPokemonsListState, pokemonsListSlice } from "../../redux";

export const HomePage = () => {
  const dispatch = useDispatch()
  const mainClient = useContext(ClientContext);
  const { offset, limit, count } = useSelector<RootState, IPokemonsListState>(
    (state) => state.pokemonsListReducer
  )
  const { data, isLoading, error } = useListPokemons(mainClient, offset, limit)
  useEffect(() => {
    if (data != null) {
      dispatch(pokemonsListSlice.setResults(data.results))
      dispatch(pokemonsListSlice.setNext(data.next))
      dispatch(pokemonsListSlice.setPrevious(data.previous))
      dispatch(pokemonsListSlice.setCount(data.count))
    }
  }, [data, isLoading, offset, limit, count])

  return (
    <div>
      <Filter />
      {error ? <Error error={error} /> : null}
      <List data={data} isLoading={isLoading} />
      <Pagination offset={offset} limit={limit} count={count} setOffset={pokemonsListSlice.setOffset} />
    </div>
  );
};
