import CartWidget from "./CartWidget"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div id="navBar">
        <h1>E-commerce</h1>
        <ul>
            <li>
                <a href="">Game Consoles</a>
            </li>
            <li>
                <a href="">PC</a>
            </li>
            <li>
                <a href="">Games</a>
            </li>
            <li>
                <a href="">Miscellaneous</a>
            </li>
        </ul>
        <CartWidget/>
    </div>
  )
}

export default Navbar