import React from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from '../common/Footer';
import HeaderIn from './HeaderIn';

const HeaderLayout = () => {
    const location = useLocation();

    // Define which routes need special header class
    const transparentRoutes = ['/', '/allcategories','/blogs','/blog-post','/faqs','/contacts','/about','/help'];
    const isTransparent = transparentRoutes.includes(location.pathname);
    return (
        <>
        {isTransparent ? 
           <div id="page" class="theia-exception">
               <div id="mm-0" class="mm-page mm-slideout">
                    <Header /> 
                </div>
                {/* <div id="toTop" ></div>     */}
            </div>
        : 
            <div id="page">
                <div id="mm-0" class="mm-page mm-slideout">
                    <HeaderIn />
                </div>
                {/* <div id="toTop" ></div>     */}
            </div>
        }
        
        <Outlet /> 
      
        <Footer />
        
    </>
    );
}

export default HeaderLayout