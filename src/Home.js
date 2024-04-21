import { Link } from "react-router-dom";
import { useAuth } from "./utils/AuthContext";

function Home() {

    const { logout } = useAuth();

    return (
        <div>
            <h1>Welcome to Home!</h1>

            <ul>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </ul>

            <button className="btn btn-primary" onClick={logout}>Logout</button>
        </div>
    )
}

export default Home;