import { Link } from "react-router-dom";
export default function Header() {
    return (
        <>
            <header>
                <div>
                    <h1>Portal Filmes</h1>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/filmes">Filmes</Link></li>
                        <li><Link to="/genero">Gêneros</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}