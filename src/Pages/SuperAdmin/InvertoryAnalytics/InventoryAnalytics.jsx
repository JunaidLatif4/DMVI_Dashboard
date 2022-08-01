import React, { useState } from 'react'

// MUI :
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

// Components :
import TopBar from '../../../Components/TabsBar/TopBar';
import LineChart from './Components/LineChart/LineChart';
import CustomeTable from "./Components/Table/CustomeTable"

// CSS :
import "./InventoryAnalytics.scss"





// Tabs :
let Tabs = ["Top Products", "Top Machines", "Locations Analytics"]
// LineChartData :
const labels = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
export const LineChartData = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [100, 80, 70, 30, 20, 75, 99, 45, 55, 60, 43],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
};
// TableData :
const tableData = [
    {name : "Coffee Machine" , value:"$125"},
    {name : "Coke" , value:"$30"},
    {name : "Coke" , value:"$50"},
    {name : "Coffee Machine" , value:"$145"},
    {name : "Cupcake" , value:"$455"},
    {name : "Coke" , value:"$320"},
    {name : "Coffee Machine" , value:"$25"},
    {name : "Cupcake" , value:"$435"},
    {name : "Cupcake" , value:"$465"},
    {name : "Coffee Machine" , value:"$225"},
    {name : "Coke" , value:"$360"},
    {name : "Cupcake" , value:"$48"},
    {name : "Coke" , value:"$30"},
    {name : "Cupcake" , value:"$45"},
];


const InventoryAnalytics = () => {

    const [selectedTab, setSelectedTab] = useState("Top Products")

    const [enteredData, setEnteredData] = useState({
        start: "11-07-2022",
        end: "26-07-2022",
        operator: "Digital Machine",
        area: "All",
        location: "All",
        machines: "All",
        products: "All"
    })

    const enteringData = (event) => {
        let { name, value } = event.target;

        setEnteredData((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    return (
        <>
            <div className="productsdetail_container">
                <TopBar tabs={Tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                <div className="inventory_container">
                    <div className="filter_box">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Start Date</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={enteredData.start}
                                label="Start Date"
                                onChange={enteredData}
                                name="start"
                            >
                                <MenuItem value={"11-07-2022"}>11-07-2022</MenuItem>
                                <MenuItem value={"11-08-2022"}>11-08-2022</MenuItem>
                                <MenuItem value={"11-09-2022"}>11-09-2022</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">End Date</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={enteredData.end}
                                label="End Date"
                                onChange={enteredData}
                                name="end"
                            >
                                <MenuItem value={"26-07-2022"}>26-07-2022</MenuItem>
                                <MenuItem value={"26-08-2022"}>26-08-2022</MenuItem>
                                <MenuItem value={"26-09-2022"}>26-09-2022</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Operator</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={enteredData.operator}
                                label="Operator"
                                onChange={enteredData}
                                name="operator"
                            >
                                <MenuItem value={"Digital Machine"}>Digital Machine</MenuItem>
                                <MenuItem value={"Manual Machine"}>Manual Machine</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Area</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={enteredData.area}
                                label="Area"
                                onChange={enteredData}
                                name="area"
                            >
                                <MenuItem value={"All"}>All</MenuItem>
                                <MenuItem value={"Germany"}>Germany</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Location</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={enteredData.location}
                                label="Location"
                                onChange={enteredData}
                                name="location"
                            >
                                <MenuItem value={"All"}>All</MenuItem>
                                <MenuItem value={"Germany"}>Germany</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Vending Machines</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={enteredData.machines}
                                label="Vending Machines"
                                onChange={enteredData}
                                name="machines"
                            >
                                <MenuItem value={"All"}>All</MenuItem>
                                <MenuItem value={"Germany"}>Germany</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Products</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={enteredData.products}
                                label="Products"
                                onChange={enteredData}
                                name="products"
                            >
                                <MenuItem value={"All"}>All</MenuItem>
                                <MenuItem value={"Germany"}>Germany</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="detail_container">
                        <div className="detail_box">
                            <LineChart title={"Top Products by Revenue ($)"} lineChartData={LineChartData} />
                            <CustomeTable name={"Product"} value="Revenue ($)" tableData={tableData} />
                        </div>
                        <div className="detail_box">
                            <LineChart title={"Top Products by Revenue ($)"} lineChartData={LineChartData} />
                            <CustomeTable name={"Product"} value="Revenue ($)" tableData={tableData} />
                        </div>
                        <div className="detail_box">
                            <LineChart title={"Top Products by Revenue ($)"} lineChartData={LineChartData} />
                            <CustomeTable name={"Product"} value="Revenue ($)" tableData={tableData} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default InventoryAnalytics