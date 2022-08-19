import Header from 'widgets/header/ui'
import './index.scss'

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <main>{children}</main>
        </div>
    )
}

export default Layout
