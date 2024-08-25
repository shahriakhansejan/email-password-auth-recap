import { Outlet } from "react-router-dom";
import '../../index.css'
import Header from "../Header/Header";

const Root = () => {
    return (
        <div>

          <Header></Header>
          <Outlet></Outlet>

        </div>
    );
};

Root.propTypes = {
    
};

export default Root;