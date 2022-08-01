import React from 'react'

import User from '../../Assets/User.png'
import Collapse from '../../Assets/collapse.png'
import Bell from '../../Assets/bell.png'

import "./TopBar.scss"

const TopBar = ({ tabs, selectedTab, setSelectedTab }) => {
    return (
        <>
            <div className="topbar_container">
                <div className="tabs_box">
                    {
                        tabs.map((data) => {
                            return (
                                <>
                                    <div className="tab" style={selectedTab == data ? { color: "#274C7E", borderBottom: "2px solid #274C7E" } : null} onClick={() => setSelectedTab(data)}>
                                        {data}
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className="action_box">
                    <div className="action">
                        <img src={Collapse} alt="" />
                    </div>
                    <div className="action">
                        <img src={Bell} alt="" />
                    </div>
                    <div className="action">
                        <img src={User} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopBar