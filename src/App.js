import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter ,RouterProvider,Outlet} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import Contact from './components/Contact'
import RestaurantMenu from './components/RestaurantMenu'
import Cart from './components/Cart'
import Error from './components/Error'
import { Provider } from 'react-redux'
import {store} from './store'
import Dummy from './components/Dummy';
import UpdateData from './components/UpdateData'

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
                    element:<Contact/>
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