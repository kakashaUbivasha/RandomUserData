import { Routes, Route } from "react-router-dom";
import Home from "../Home.jsx"
const MainRouter = () => {
    return (
        <Routes>
            <Route index element={< Home />} />
        </Routes>
    );
};
export default MainRouter