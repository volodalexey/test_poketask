import { MainClient } from "../../clients";
import { Filter } from "../../components/filter";
import { Error } from "../../components/error";
import { List } from "../../components/list";
import { Pagination } from "../../components/pagination";
import { useListPokemons } from "../../libs/useRequest";

const api = new MainClient();

export const HomePage = () => {

  const { data, isLoading, error } = useListPokemons(api)

  return (
    <div>
      <Filter />
      {error ? <Error error={error} /> : null}
      <List data={data} isLoading={isLoading} />
      <Pagination />
    </div>
  );
};
