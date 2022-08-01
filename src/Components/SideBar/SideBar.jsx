import React from 'react'
import { useHistory } from 'react-router-dom'

import Logo from "../../Assets/logo.png"
import ad from "../../Assets/ad.png"
import age from "../../Assets/age.png"
import an from "../../Assets/an.png"
import arcade from "../../Assets/arcade.png"
import emoji from "../../Assets/emoji.png"
import finance from "../../Assets/finance.png"
import fitness from "../../Assets/fitness.png"
import health from "../../Assets/health.png"
import inan from "../../Assets/inan.png"
import info from "../../Assets/info.png"
import inventory from "../../Assets/inventory.png"
import locations from "../../Assets/locations.png"
import machine from "../../Assets/machine.png"
import mperformance from "../../Assets/mperformance.png"
import operators from "../../Assets/operators.png"
import performance from "../../Assets/performance.png"
import products from "../../Assets/products.png"
import sales from "../../Assets/sales.png"
import Union from "../../Assets/Union.png"
import virtual from "../../Assets/virtual.png"

import "./SideBar.scss"



const SideBar = () => {
    let history = useHistory()

    return (
        <>
            <div className="sidebar_container">
                <div className="logo_box" onClick={() => history.push("/dashboard")}>
                    <img src={Logo} alt="" />
                </div>
                <div className="links_box">
                    <div className="link" onClick={() => history.push("/dashboard")}>
                        <img src={Union} alt="" />
                        <p>Dashboard</p>
                    </div>
                    <div className="link" onClick={() => history.push("/dashboard/details")}>
                        <img src={machine} alt="" />
                        <p>Vending Machines</p>
                    </div>
                    <div className="link">
                        <img src={ad} alt="" />
                        <p>Advertising</p>
                    </div>
                    <div className="link">
                        <img src={age} alt="" />
                        <p>Age Verification</p>
                    </div>
                    <div className="link">
                        <img src={an} alt="" />
                        <p>Anomaly Detection</p>
                    </div>
                    <div className="link">
                        <img src={arcade} alt="" />
                        <p>Arcade (Gamification)</p>
                    </div>
                    <div className="link">
                        <img src={finance} alt="" />
                        <p>Finance</p>
                    </div>
                    <div className="link">
                        <img src={fitness} alt="" />
                        <p>Fitness</p>
                    </div>
                    <div className="link">
                        <img src={health} alt="" />
                        <p>Health Monitoring</p>
                    </div>
                    <div className="link">
                        <img src={inventory} alt="" />
                        <p>Inventory</p>
                    </div>
                    <div className="link">
                        <img src={inan} alt="" />
                        <p>Inventory Analytics</p>
                    </div>
                    <div className="link">
                        <img src={info} alt="" />
                        <p>Inventory Forecast</p>
                    </div>
                    <div className="link">
                        <img src={locations} alt="" />
                        <p>Location</p>
                    </div>
                    <div className="link">
                        <img src={operators} alt="" />
                        <p>Operators</p>
                    </div>
                    <div className="link">
                        <img src={products} alt="" />
                        <p>Products</p>
                    </div>
                    <div className="link">
                        <img src={sales} alt="" />
                        <p>Sales Forecast</p>
                    </div>
                    <div className="link">
                        <img src={emoji} alt="" />
                        <p>Users</p>
                    </div>
                    <div className="link">
                        <img src={virtual} alt="" />
                        <p>Vertual Try on</p>
                    </div>
                    <div className="link">
                        <img src={performance} alt="" />
                        <p>Product Performance</p>
                    </div>
                    <div className="link">
                        <img src={mperformance} alt="" />
                        <p>Machine Performance</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar