import { socket } from '@shared/api/socket-base'
import { createEffect, createEvent, createStore, forward } from 'effector'
import { useStore } from 'effector-react'
import { PaintCoords } from './types'

const onRepaint = createEvent<PaintCoords>()
export const onDraw = createEvent<PaintCoords>()

const sendDrawFx = createEffect((coords: PaintCoords) => {
    socket.emit('draw', coords)
})

forward({ from: onDraw, to: sendDrawFx })

socket.on('paint', (data) => {
    onRepaint(data)
})

const $paint = createStore<PaintCoords[]>([]).on(onRepaint, (prev, payload) => [payload, ...prev])

const $lastPaint = createStore<PaintCoords | null>(null)

forward({ from: onRepaint, to: $lastPaint })

export const usePaint = () => useStore($paint)
export const useLastPaint = () => useStore($lastPaint)
