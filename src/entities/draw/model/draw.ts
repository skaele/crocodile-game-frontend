import { socket } from '@shared/api/base/socket-base'
import { createEffect, createEvent, createStore, forward, sample } from 'effector'
import { useStore } from 'effector-react'
import { DrawCoords } from '../types'

const onUpdateDraw = createEvent<DrawCoords>()
export const setDraw = createEvent<DrawCoords[]>()
export const onDraw = createEvent<DrawCoords>()

const sendDrawFx = createEffect((coords: DrawCoords) => {
    socket.emit('draw', { coords: [coords], gameId: '160d1a1a-e68c-49b4-a30d-8ac94dd7dd0a' })
})

forward({ from: onDraw, to: sendDrawFx })

socket.on('update-draw', (data) => {
    onUpdateDraw(data)
})

const $lastDraw = createStore<DrawCoords | null>(null)
export const $initDraw = createStore<DrawCoords[] | null>(null)

forward({ from: onUpdateDraw, to: $lastDraw })

export const useLastDraw = () => useStore($lastDraw)
export const useInitDraw = () => useStore($initDraw)
