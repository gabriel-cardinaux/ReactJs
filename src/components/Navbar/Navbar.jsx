import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/">
        <h1>E-commerce</h1>
        </Link>
        <ul>
            <li>
                <Link to="/category/game-consoles">Game Consoles</Link>
            </li>
            <li>
                <Link to="/category/pc">PC</Link>
            </li>
            <li>
                <Link to="/category/others">Others</Link>
            </li>
        </ul>
        <CartWidget/>
    </nav>
  )
}

export default Navbar