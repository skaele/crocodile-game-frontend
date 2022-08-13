import { RouteProps } from 'react-router-dom'

enum PUBLIC_ROUTES {
    LOGIN = '/login',
}

type PublicRouteProps = Omit<RouteProps, 'path'> & { path: PUBLIC_ROUTES }

const publicRoutes: PublicRouteProps[] = [
    {
        path: PUBLIC_ROUTES.LOGIN,
    },
]

export default publicRoutes
