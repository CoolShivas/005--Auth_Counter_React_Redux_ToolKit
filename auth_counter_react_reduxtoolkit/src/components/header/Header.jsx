import { useDispatch } from 'react-redux';
import { authActions } from '../../store';
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import classes from './Header.module.css';


const Header = () => {

    const { isAuthenticated } = useSelector((store) => store.authen);

    const dispatch = useDispatch();

    const handlerOnLogOut = () => {
        console.log("Bye Bye logout now");
        dispatch(authActions.logOut());
    };

    return (
        <header className={classes.header}>

            {!isAuthenticated && <>

                <NavLink to="/dashboard"><h1>Redux Auth</h1> </NavLink>
                {/* <NavLink to="/auth">
                    <button> Login </button>
                </NavLink> */}
            </>}

            {isAuthenticated && <>
                <NavLink to="/dashboard"><h1>Redux Auth</h1> </NavLink>
                <NavLink to="/products">My Products</NavLink>
                <NavLink to="/sales">My Sales</NavLink>
                <NavLink to="/userprofile"> User </NavLink>
                <NavLink to="/auth">
                    <button onClick={handlerOnLogOut}> Logout </button>
                </NavLink>
            </>}

        </header>
    );
};

export default Header;
