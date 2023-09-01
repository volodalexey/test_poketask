export const CLIENT_PATH = {
  app: {
    $root: 'app',
    list: {
      pokemons: 'pokemons'
    },
    view: {
      pokemons: 'pokemons'
    }
  },
}

export const FULL_CLIENT_PATH = {
  root: '/',
  pokemonsList: `/${CLIENT_PATH.app.$root}/${CLIENT_PATH.app.list.pokemons}`,
  pokemonsView$: `/${CLIENT_PATH.app.$root}/${CLIENT_PATH.app.view.pokemons}`,
}
