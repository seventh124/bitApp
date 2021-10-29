import React from 'react';

const Header = () => {
    return (
        <div>
            <header className="head-navbar">
        {/* --Barra de navegacion-- */}
                <nav className="nav">
                    <a href="#" className="logo nav-link">BitApp</a>
                    <ul className="nav-menu">
                        <li className="nav-menu-item"><a href="" className="nav-menu-link nav-link">Agregar Venta</a></li>
                        <li className="nav-menu-item"><a href="" className="nav-menu-link nav-link">Mis Ventas</a></li>
                        <li className="nav-menu-item"><a href="" className="nav-menu-link nav-link">Perfil</a></li>
                        <li className="nav-menu-item"><a href="" className="nav-menu-link nav-link">Catálogo</a></li>
                        <li className="nav-menu-item"><a href="" className="nav-menu-link nav-link">Vendedores</a></li>
                        <li className="nav-menu-item"><a href="" className="nav-menu-link nav-link">Salir</a></li>
                    </ul>              
                </nav>
        {/* --Fin de Barra de navegacion-- */}
            </header>
        </div>
        
    );
};

export default Header;