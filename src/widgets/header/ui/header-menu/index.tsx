import { Link } from 'react-router-dom'

const menuItems = [
    {
        title: 'Главная',
        link: '/home',
    },
    {
        title: 'Комнаты',
        link: '/rooms',
    },
    {
        title: 'Статистика',
        link: '/statistic',
    },
]

const HeaderMenu = () => {
    return (
        <ul className="h-full flex f-row justify-between items-center gap-2">
            {menuItems.map((item) => (
                <li className="font-normal" key={item.title}>
                    <Link to={item.link}>{item.title}</Link>
                </li>
            ))}
        </ul>
    )
}

export default HeaderMenu
