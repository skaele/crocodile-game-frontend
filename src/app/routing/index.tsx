import LoginPage from '@pages/login'
import NoMatchPage from '@pages/no-math'
import RoomPage from '@pages/room'
import RoomsPage from '@pages/rooms'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './private-route'
import PublicRoute from './public-route'

const Routing = () => {
    return (
        <Routes>
            <Route element={<PrivateRoute />}>
                <Route path={'/rooms'}>
                    <Route index element={<RoomsPage />} />
                    <Route path={':id'} element={<RoomPage />} />
                </Route>
            </Route>
            <Route element={<PublicRoute />}>
                <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route path="*" element={<NoMatchPage />} />
        </Routes>
    )
}

export default Routing
