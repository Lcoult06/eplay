import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay'
  }),
  endpoints: (builder) => ({
    getFeaturedGame: builder.query<Game, void>({
      query: () => 'destaque'
    }),
    getOnSale: builder.query<Game[], void>({
      query: () => 'promocoes'
    }),
    getSoon: builder.query<Game[], void>({
      query: () => 'em-breve'
    }),
    getAcaoGames: builder.query<Game[], void>({
      query: () => 'acao'
    }),
    getEsporteGames: builder.query<Game[], void>({
      query: () => 'esportes'
    }),
    getSimulacaoGames: builder.query<Game[], void>({
      query: () => 'simulacao'
    }),
    getLutaGames: builder.query<Game[], void>({
      query: () => 'luta'
    }),
    getRpgGames: builder.query<Game[], void>({
      query: () => 'rpg'
    }),
    getGame: builder.query<Game, string>({
      query: (id) => `jogos/${id}`
    })
  })
})

export const {
  useGetFeaturedGameQuery,
  useGetOnSaleQuery,
  useGetSoonQuery,
  useGetAcaoGamesQuery,
  useGetEsporteGamesQuery,
  useGetSimulacaoGamesQuery,
  useGetLutaGamesQuery,
  useGetRpgGamesQuery,
  useGetGameQuery
} = api

export default api
