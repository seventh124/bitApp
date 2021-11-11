import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
  } from "react-router-dom";
import PrivateLayout from '../Layout/PrivateLayout';
import PublicLayout from '../Layout/PublicLayout';
import Roles from '../Pages/Admin/Roles';
import Iventas from '../Pages/Admin/Iventas';
import Index from '../Pages/Public/Index';
import Misventas from '../Pages/Admin/Misventas';
import Perfil from '../Pages/Admin/Perfil';
import Catalogo from '../Pages/Admin/Catalogo';
import Vendedores from '../Pages/Admin/Vendedores';


const Routes = () => {
    return (
    <Router>
        <Switch>
            <Route path={['/Vendedores','/Catalogo','/Perfil','/Mis_Ventas','/Ingresar_Venta','/dash','/roles','/ventas']}>
                <PrivateLayout>
                    <Switch>
                        <Route path='/Ingresar_Venta'>
                            <Iventas/>
                        </Route>
                        <Route path='/Mis_Ventas'>
                            <Misventas/>
                        </Route>
                        <Route path='/Perfil'>
                            <Perfil/>
                        </Route>
                        <Route path='/Catalogo'>
                            <Catalogo/>
                        </Route>
                        <Route path='/Vendedores'>
                            <Vendedores/>
                        </Route>
                        
                        <Route path='/roles'>
                            <Roles/>
                        </Route>
                        
                    </Switch>
                </PrivateLayout>
            </Route>
            <Route path={['/features', '/']}>
                <PublicLayout>
                   <Switch>
                       <Route path='/'>
                           <Index/>
                       </Route>

                   </Switch>
                </PublicLayout>
            </Route>
        </Switch>
    </Router>
    )
}

export default Routes
