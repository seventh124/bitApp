import React from 'react'
import Navbars from '../Components/Navbars'
import PrivateRoutes from '../Components/PrivateRoutes'

const PrivateLayout = ({children}) => {
    return (
        
        
        <PrivateRoutes>
            <div>
                <Navbars/>

            
            Este es mi private layout
            {children}

        </div>
        </PrivateRoutes>
        
    )
}

export default PrivateLayout
