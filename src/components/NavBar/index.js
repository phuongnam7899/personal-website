import { Link, NavLink } from 'react-router-dom'
import './index.scss'

export const NavBar = () => {
    const navLinkClassName = ({isActive}) => {
        return `menu-item ${isActive ? 'active' : ''}`
    }
    return <div className="nav-bar">
        <Link to='/' className='logo'>nklm</Link>
        <div className='menu'>
            <NavLink to='/' className={navLinkClassName}>Home</NavLink>
            <NavLink to='/blog' className={navLinkClassName}>Blog</NavLink>
            <NavLink to='/playground' className={navLinkClassName}>Playground</NavLink>
            <NavLink to='/portfolio' className={navLinkClassName}>My Portfolio</NavLink>
            <NavLink to='/about' className={navLinkClassName}>About me</NavLink>
        </div>
    </div>
}