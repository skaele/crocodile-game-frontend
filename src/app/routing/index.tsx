import { Routes, Route } from 'react-router-dom'
import privateRoutes from './private-routes'
import publicRoutes from './public-routes'

const Routing = () => {
    // effector state
    const loggined = true

    const routes = loggined ? privateRoutes : publicRoutes

    return (
        <Routes>
            {routes.map((route) => (
                <Route key={route.path} {...route} />
            ))}
        </Routes>
    )
}

export default Routing
