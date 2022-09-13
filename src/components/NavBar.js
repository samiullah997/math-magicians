import { Link } from 'react-router-dom';
import './NavBar.css';

export default function nav() {
  return (
    <nav>
      <h1>Math Magicians</h1>
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Calculator">Calculator</Link></li>
        <li><Link to="/Quote">Quote</Link></li>
      </ul>
    </nav>
  );
}
