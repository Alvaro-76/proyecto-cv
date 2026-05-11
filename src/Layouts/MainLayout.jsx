import { Outlet } from 'react-router-dom'

import Header from "../Components/Header"
import Footer from "../Components/Footer"
import NavBar from "../Components/NavBar"

function MainLayout() {
    return (
        <main>
            <Header />
            <NavBar />

            <Outlet />  

            <Footer />
        </main>
    );
}

export default MainLayout