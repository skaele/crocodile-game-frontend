import Chat from '@features/chat/ui'
import DrawPanel from '@features/draw/ui'
import './index.scss'

const RoomPage = () => {
    return (
        <div className="room">
            <Chat />
            <DrawPanel />
        </div>
    )
}

export default RoomPage
