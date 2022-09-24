import { $initDraw } from '@entities/draw/model/draw'
import fetchInstance from '@shared/api/base/api-base'
import { createEffect, createEvent, forward, sample } from 'effector'
import { Game } from './types'

export const onLoadInitGame = createEvent<string>()

const loadInitGameFx = createEffect(async (gameId: string) => {
    const gameData: Game = await fetchInstance(`games/${gameId}`).then((resp) => resp.json())

    return gameData
})

forward({ from: onLoadInitGame, to: loadInitGameFx })

sample({ clock: loadInitGameFx.doneData, fn: (game) => game.inProgressPoints, target: $initDraw })
