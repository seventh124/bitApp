import React from 'react'
import Navbars from '../Components/Navbars'


const PublicLayout = ({children}) => {
    return (
        <div>
            <Navbars/>

            este es mi public layout
         
            {children}

        </div>
    )
}

export default PublicLayout
