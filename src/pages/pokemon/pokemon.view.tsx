import { useParams } from "react-router-dom"
import { Card } from "../../components/card"

export const PokemonViewPage = () => {
  const params = useParams()
  return <Card pokemonName={params.pokemonName ?? ''} />
}
