import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <h1>Redux Auth</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/products">My Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sales">My Sales</NavLink>
                    </li>
                    <li>
                        <NavLink to="/userprofile"> User </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard">
                            <button>Logout</button>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
