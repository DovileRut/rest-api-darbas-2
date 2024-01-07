import {Link} from "react-router-dom"

const Navbar = () => {
    return ( 
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Automobilių nuoma</h1>
                </Link>
                <div className="links">
                    <Link to="/apie-mus">
                        <p>Apie mus</p>
                    </Link>
                    <Link to="/susisiekite">
                        <p>Susisiekite</p>
                    </Link>
                </div>
            </div>
        </header>
    )
}
 
export default Navbar