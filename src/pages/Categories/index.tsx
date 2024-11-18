import ProductsList from '../../components/ProductsList'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
import { Game } from '../Home'
import { useEffect, useState } from 'react'
import {
  useGetAcaoGamesQuery,
  useGetEsporteGamesQuery,
  useGetLutaGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulacaoGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetAcaoGamesQuery()
  const { data: sportsGames } = useGetEsporteGamesQuery()
  const { data: fightsGames } = useGetLutaGamesQuery()
  const { data: simulationGames } = useGetSimulacaoGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()

  if (
    actionGames &&
    sportsGames &&
    fightsGames &&
    simulationGames &&
    rpgGames
  ) {
    return (
      <>
        <ProductsList games={actionGames} title="Ação" background="black" />
        <ProductsList games={sportsGames} title="Esportes" background="gray" />
        <ProductsList games={fightsGames} title="Luta" background="black" />
        <ProductsList games={rpgGames} title="RPG" background="gray" />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="black"
        />
      </>
    )
  }
}

export default Categories
