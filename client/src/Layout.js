import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <main>
            <Header />
            <hr></hr>
            <Outlet />
        </main>
    );
}