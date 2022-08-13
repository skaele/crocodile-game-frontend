import { RouteProps } from 'react-router-dom'

enum PRIVATE_ROUTES {
    ROOMS = '/rooms',
    ROOM = '/room/:id',
}

type PrivateRouteProps = Omit<RouteProps, 'path'> & { path: PRIVATE_ROUTES }

const privateRoutes: PrivateRouteProps[] = [
    {
        path: PRIVATE_ROUTES.ROOMS,
    },
    {
        path: PRIVATE_ROUTES.ROOM,
    },
]

export default privateRoutes
