import React, { useState } from 'react'

// Components :
import TopBar from '../../../Components/TabsBar/TopBar';
import Cards from './Components/Cards/Cards';
import DonutChart from './Components/DonutChart/DonutChart';
import ProgressBarChart from './Components/ProgressBarChart/ProgressBarChart';

// CSS :
import "./Dashboard.scss"




// TopBar Tabs :
let Tabs = ["Dashboard"]
// Charts Data :
const data = {
    labels: [],
    datasets: [
        {
            data: [40, 166],
            backgroundColor: ["#D72A5E", "#259E55"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            borderWidth: 1
        }
    ]
};
const vendingdata = {
    labels: [],
    datasets: [
        {
            data: [50, 166, 10],
            backgroundColor: ["#F49C4B", "#D72A5E", '#259E55'],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            borderWidth: 1
        }
    ]
};
// ProgressBarData :
let barData = [
    { title: "CAMEL", value: 100 },
    { title: "UFC", value: 40 },
    { title: "VUSE", value: 60 },
    { title: "COKE", value: 80 },
    { title: "UFC", value: 70 },
    { title: "DIET", value: 20 },
    { title: "CAMEL", value: 50 },
    { title: "VUSE", value: 60 },
    { title: "CAMEL", value: 45 },
    { title: "UFC", value: 70 },
    { title: "CAMEL", value: 55 },
    { title: "VUFC", value: 75 },
    { title: "VUFC", value: 95 },
    { title: "COKE", value: 35 },
    { title: "CAMEL", value: 55 },
    { title: "COKE", value: 90 },
    { title: "DIET", value: 100 },
    { title: "VUFC", value: 75 },
]

const Dashboard = () => {

    let [selectedTab, setSelectedTab] = useState("Dashboard")


    return (
        <>
            <div className="dashboard_container">
                <TopBar tabs={Tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                <div className='cards_box'>
                    <Cards title="Online Vending Machines" result={23} total={45} detail={"0% of all Vending Machines are online"} />
                    <Cards title="Products out of stock" result={7} total={50} detail={"Across all vending machines"} borderColor="#E13976" />
                    <Cards title="Total product inventory" result={579} total={"6.10k"} detail={" Across all vending machines"} borderColor="#FFA96B" />
                    <Cards title="Stock current value" result={"$10.03M"} detail={"Across all vending machines"} borderColor="#DE7142" />
                </div>
                <div className='charts_box'>
                    <div className='donut_chart'>
                        <DonutChart title={"Product Stock Status"} data={data} />
                        <div className='centre_line'></div>
                        <DonutChart title={"Vending Machines Stock Status"} data={vendingdata} />
                    </div>
                    <div className='progressbar_box'>
                        <ProgressBarChart title="Item availibility on vending machines" progressBarData={barData} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard