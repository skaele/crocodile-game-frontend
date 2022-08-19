import HeaderMenu from './header-menu'
import './index.scss'
import Logo from './logo'
import Profile from './profile'

const Header = () => {
    return (
        <header className="bg-white h-full w-full">
            <nav className="h-full pl-10 pr-6 flex justify-between items-center">
                <Logo />
                <div className="flex justify-between items-center gap-5">
                    <HeaderMenu />
                    <Profile />
                </div>
            </nav>
        </header>
    )
}

export default Header
