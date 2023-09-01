import { FULL_CLIENT_PATH } from "../../constants";
import { type NamedAPIResourceList } from "../../models";
import { Card } from "../card";
import { ContentLineDivider, ListItem, ListLink, Ul } from "./styled";

export const List = ({ data, isLoading }: {
  data: NamedAPIResourceList | undefined
  isLoading: boolean
}) => (
  <Ul isLoading={isLoading}>
    {data?.results.map((resource, idx, resources) => (
        <ListItem key={resource.url}>
          <ListLink to={`${FULL_CLIENT_PATH.pokemonsView$}/${resource.name}`}>
            <Card resource={resource} />
            {(resources[idx + 1] !== null) ? <ContentLineDivider /> : null}
          </ListLink>
        </ListItem>
    ))}
  </Ul>
);
