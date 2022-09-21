import { socket } from '@shared/api/socket-base'
import { createEffect, createEvent, createStore, forward } from 'effector'
import { useStore } from 'effector-react'
import { PaintCoords } from './types'

const onUpdateDraw = createEvent<PaintCoords>()
export const onDraw = createEvent<PaintCoords>()
export const initDraw = createEvent()

const sendDrawFx = createEffect((coords: PaintCoords) => {
    socket.emit('draw', { coords, gameId: '160d1a1a-e68c-49b4-a30d-8ac94dd7dd0a' })
})

forward({ from: onDraw, to: sendDrawFx })

const loadInitDrawFx = createEffect(() => {
    // const response = fetch('')
})

socket.on('update-draw', (data) => {
    console.log('dd')
    onUpdateDraw(data)
})

const $paint = createStore<PaintCoords[]>([]).on(onUpdateDraw, (prev, payload) => [payload, ...prev])

const $lastPaint = createStore<PaintCoords | null>(null)

forward({ from: onUpdateDraw, to: $lastPaint })

export const usePaint = () => useStore($paint)
export const useLastPaint = () => useStore($lastPaint)
