import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter ,RouterProvider,Outlet} from 'react-router-dom'

import Header from './src/components/Header'
import Body from './src/components/Body'
import About from './src/components/About'
import RestaurantMenu from './src/components/RestaurantMenu'
import Cart from './src/components/Cart'
const Contact=lazy(()=>import('./src/components/Contact'))
import Error from './src/components/Error'
import { Provider } from 'react-redux'
import {store} from './src/store'

const AppLayout =()=>{
    return (
        <>
        <Header/>
       <Outlet/>
        </>
    )
}

const appRoute=createBrowserRouter([
        {
            path:"/",
            element:<AppLayout/>,
            children:[
                {
                    path:'/',
                    element:<Body/>
                },
                {
                    path:'/contact',
                    element:<Suspense fallback={'Loading....'}>
                    <Contact/>
                    </Suspense>,
                },
                {
                    path:'/restaurant/:id',
                    element:<RestaurantMenu/>
                },
                { 
                    path:'/cart',
                    element:<Cart/>
                }
            ],
            errorElement:<Error/>,
        },
        
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
    <RouterProvider router={appRoute}/>
    </Provider>)