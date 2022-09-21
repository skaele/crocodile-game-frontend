import { useEffect } from 'react'
import { onRoomJoin } from '@entities/room/model'
import Chat from '@features/chat/ui'
import DrawPanel from '@features/draw/ui'
import './index.scss'

const RoomPage = () => {
    useEffect(() => {
        onRoomJoin('160d1a1a-e68c-49b4-a30d-8ac94dd7dd0a')
    }, [])

    return (
        <div className="room">
            <Chat />
            <DrawPanel />
        </div>
    )
}

export default RoomPage
