import { FULL_CLIENT_PATH } from "../../constants";
import { type NamedAPIResourceList } from "../../models";
import { ContentLineDivider, ListItem, ListLink, TitleLine, Ul } from "./styled";

export const List = ({ data }: {
  data: NamedAPIResourceList | undefined
}) => (
  <Ul>
      {data?.results.map((resource, idx, resources) => (
        <ListItem key={resource.url}>
          <ListLink to={`${FULL_CLIENT_PATH.pokemonsView$}/${resource.name}`}>
            <TitleLine>{resource.name}</TitleLine>
            {(resources[idx + 1] !== null) ? <ContentLineDivider /> : null}
          </ListLink>
        </ListItem>
      ))}
    </Ul>
);
