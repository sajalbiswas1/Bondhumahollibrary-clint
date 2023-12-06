import { Outlet } from "react-router-dom";
import NavBar from "../Page/Shared/NavBar/NavBar";
import Footer from "../Page/Shared/Footer/Footer";

const Main = () => {
    return (
        <div className="max-w-[1280px] m-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;