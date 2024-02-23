import CartWidget from "../components/CartWidget";
import CartIcon from "../img/carticon.png"

import "./styles/NavBar.css"

//* COMPONENTE NAVBAR

function NavBar() {
    return (
        <header>
            <h1>SPACESMART</h1>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon custom-toggler"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">INICIO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">PRODUCTOS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">CONTACTO</a>
                            </li>
                        </ul>
                    </div>
                    <CartWidget img={CartIcon} />
                </div>

            </nav>
        </header>

    )
}

export default NavBar;