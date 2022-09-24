import { socket } from '@shared/api/base/socket-base'
import { createEffect, createEvent, forward } from 'effector'

export const onGameJoin = createEvent<string>()

// will then take user id
const joinGameFx = createEffect((gameId: string) => {
    console.log(gameId)
    socket.emit('join-draw-room', { gameId })
})

forward({ from: onGameJoin, to: joinGameFx })
