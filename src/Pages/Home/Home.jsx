import React from 'react'
import { Route } from 'react-router-dom'

// Componets :
import SideBar from '../../Components/SideBar/SideBar'
import Dashboard from "../SuperAdmin/Dashboard/Dashboard"
import InventoryAnalyrics from '../SuperAdmin/InvertoryAnalytics/InventoryAnalytics'

// CSS :
import "./Home.scss"




const Home = () => {
    return (
        <>
            <div className="main_container">
                <SideBar />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route path="/dashboard/details" component={InventoryAnalyrics} />
            </div>
        </>
    )
}

export default Home