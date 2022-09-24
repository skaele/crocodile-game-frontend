import { useEffect } from 'react'
import Chat from '@features/chat/ui'
import DrawPanel from '@features/draw/ui'
import './index.scss'
import { reflect } from '@effector/reflect'
import { onGameJoin } from '@entities/draw/model/draw-room'
import { onLoadInitGame } from '@entities/game/model'

const view = () => (
    <div className="room">
        <Chat />
        <DrawPanel />
    </div>
)

const RoomPage = reflect({
    view,
    bind: {},
    hooks: {
        mounted: () => {
            onLoadInitGame('160d1a1a-e68c-49b4-a30d-8ac94dd7dd0a')
            onGameJoin('160d1a1a-e68c-49b4-a30d-8ac94dd7dd0a')
        },
    },
})

export default RoomPage
