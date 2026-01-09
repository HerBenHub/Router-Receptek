import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Receptek from "../pages/Receptek";



export default function Main() {
    return (
        <main className="container mt-4">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/receptek" element={<Receptek />} />
                <Route path="*" element={<h2>404 - Az oldal nem található</h2>} />
            </Routes>
        </main>
    );
}