import React from 'react'
import { Route } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'
import ProductsDetails from './Components/Analytics/ProductsDetails'
import Main from './Components/Main/Main'

import "./Dashboard.scss"

const Dashboard = () => {
    return (
        <>
            <div className="main_container">
                <SideBar />
                <Route exact path="/dashboard" component={Main} />
                <Route path="/dashboard/details" component={ProductsDetails} />
            </div>
        </>
    )
}

export default Dashboard