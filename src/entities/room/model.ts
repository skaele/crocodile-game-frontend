import { socket } from '@shared/api/socket-base'
import { createEffect, createEvent, forward } from 'effector'

export const onRoomJoin = createEvent<string>()

// will then take user id
const joinRoomFx = createEffect((gameId: string) => {
    console.log(gameId)
    socket.emit('join-room', { gameId })
})

forward({ from: onRoomJoin, to: joinRoomFx })
