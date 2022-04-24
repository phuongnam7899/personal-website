import { Link } from 'react-router-dom'
import './index.scss'

export const CtaButton = ({to, children}) => {
    return <Link to={to} className="cta-me-btn">
    {children}
  </Link>
}