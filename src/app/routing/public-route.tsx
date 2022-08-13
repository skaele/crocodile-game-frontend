import { Outlet } from 'react-router-dom'

const PublicRoute = () => {
    // effector state
    // const loggined = true

    //TODO: prevent login page for logined user
    // return loggined ? <Outlet /> : <Navigate to="/" />
    return <Outlet />
}

export default PublicRoute
