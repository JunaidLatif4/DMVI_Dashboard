import '@progress/kendo-theme-material/dist/all.css';
import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from "./Pages/Home/Home"

import { ToastContainer, toast } from "react-toastify"

import 'react-toastify/dist/ReactToastify.css';




const App = () => {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="app_container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/dashboard" component={Home} />
                </Switch>
            </div>
        </>
    )
}

export default App