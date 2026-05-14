import { Outlet } from 'react-router-dom'

function MainLayout() {
    return (
        <main>
            <div className="page-content">
                <div className="notebook-grid">
                    <Outlet />
                </div> 
            </div>                  
        </main>
    );
}

export default MainLayout
