import { type NamedAPIResourceList } from "../../models";

export const List = ({ data, isLoading }: {
  data: NamedAPIResourceList | undefined
  isLoading: boolean
}) => (
  <ul>
    {isLoading
      ? '...loding...'
      : data?.results
        .map(result => (<li key={result.url}>{result.name} {result.url}</li>))}
  </ul>
);
