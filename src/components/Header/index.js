import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <>
    <nav>
      <ul className="list-items">
        <Link className="nav-link" to="/">
          <li className="blogs">Home</li>
        </Link>
        <Link className="nav-link" to="/about">
          <li className="blogs">About</li>
        </Link>
      </ul>
    </nav>
  </>
)

export default Header
