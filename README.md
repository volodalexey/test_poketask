# Reccomendations

- use yarn
- follow code structure

# Goal

- Using following API https://pokeapi.co/docs/v2#resource-listspagination-section implement:

## Show pokemons list, using

- Avoid TypeScript, **any**
- Minimal style with [Styled Components](https://styled-components.com/) or [EmotionJS](https://emotion.sh/docs/styled)
- Use [SWR](https://swr.vercel.app/) with [Axios](https://github.com/axios/axios)

### Level 1

- pokemons list, where _name_ from API response;
- Pagination, 20 pokemons per page, calc total pages _count_ from API.

### Level 2

- Add pokemon "card", except name display data, from API https://pokeapi.co/docs/v2#pokemon-section

### Level 3

- Add filter https://pokeapi.co/docs/v2#abilities, implement as panel nither dropdown (select), could be multiple parameters.

### Level 4

- Create additional page-filter by https://pokeapi.co/docs/v2#pokemon-habitats with previous (Level 3) filters

**No need to accomplish all levels**

Main criteria **Level 1**, **Level 2** desirable for implementation.

Good luck =)
