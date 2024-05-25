import UserProfile from "./components/pages/UserProfile";
import MySales from "./components/pages/MySales";
import MyProducts from "./components/pages/MyProducts";
import { Route } from "react-router-dom";
import Auth from "./components/authen/Auth";
import Counter from "./components/main/Counter";
import Header from "./components/header/Header";

const App = () => {
    return (
        <>

            <Route path="/"> <Header></Header> </Route>
            <Route path="/auth"> <Auth></Auth> </Route>
            <Route path="/counter"> <Counter></Counter> </Route>
            <Route path="/products"> <MyProducts></MyProducts> </Route>
            <Route path="/sales"> <MySales></MySales> </Route>
            <Route path="/userprofile"> <UserProfile></UserProfile> </Route>
        </>
    )
}

export default App;