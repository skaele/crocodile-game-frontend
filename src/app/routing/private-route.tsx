import { Navigate, Outlet } from 'react-router-dom'
import Layout from 'widgets/layout'

const PrivateRoute = () => {
    // effector state
    const loggined = true

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return loggined ? (
        <Layout>
            <Outlet />
        </Layout>
    ) : (
        <Navigate to="/login" />
    )
}

export default PrivateRoute
