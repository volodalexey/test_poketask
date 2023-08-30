import { useContext } from "react";
import { useSelector } from "react-redux"
import { Filter } from "../../components/filter";
import { Error } from "../../components/error";
import { List } from "../../components/list";
import { Pagination } from "../../components/pagination";
import { useListPokemons } from "../../utils/srw.hooks";
import { ClientContext } from "../../utils/client.context";
import { type RootState } from "../../redux";
import { type IPokemonsListState } from "../../redux/types";

export const HomePage = () => {
  const mainClient = useContext(ClientContext);
  const { offset, limit } = useSelector<RootState, IPokemonsListState>(
    (state) => state.pokemonsListReducer
  )
  const { data, isLoading, error } = useListPokemons(mainClient, offset, limit)

  return (
    <div>
      <Filter />
      {error ? <Error error={error} /> : null}
      <List data={data} isLoading={isLoading} />
      <Pagination />
    </div>
  );
};
