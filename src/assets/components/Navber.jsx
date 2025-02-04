
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <div className="container-nav">
      <a className='nav-link'>Logo</a>
      <div>
        <Link className='link-bar' to="/">Home</Link>
        <Link to="/add">Create</Link>
      </div>
      </div>
    </nav>
  )
}

export default Navbar
