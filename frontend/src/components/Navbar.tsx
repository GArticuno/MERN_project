import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg bg-dark'>
      <h4><Link className='link' to='/notes'>Notes</Link></h4>
      <h4><Link className='link' to='/add'>Add Notes</Link></h4>
    </nav>
  )
}
