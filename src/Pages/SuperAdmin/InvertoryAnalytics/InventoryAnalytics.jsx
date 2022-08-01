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

// Chart.JS :
import {
    Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Assets :
import Collapse from "../../../Assets/collapse.png"
import Bell from "../../../Assets/bell.png"
import User from "../../../Assets/User.png"

// CSS :
import "./InventoryAnalytics.scss"
import TopBar from '../../../Components/TabsBar/TopBar';

// Chart Registry :
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
};
const labels = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
export const data = {
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


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#E5E9EF",
        //   color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: "12px",
    },
}));

function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Coffee Machine', "$125"),
    createData('Coke', "$30"),
    createData('Cupcake', "$45"),
    createData('Cupcake', "$190"),
    createData('Cupcake', "$130"),
    createData('Cupcake', "$12"),
    createData('Cupcake', "$14"),
    createData('Cupcake', "$56"),
    createData('Cupcake', "$44"),
    createData('Cupcake', "$23"),
    createData('Cupcake', "$43"),
];


let Tabs = ["Top Products", "Top Machines", "Locations Analytics"]
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
                <div className="dashboard_container">
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
                            <div className="chart_box">
                                <div className="heading">
                                    Top Products by Revenue ($)
                                </div>
                                <div className="chart">
                                    <Line style={{ height: "280px" }} options={options} data={data} />
                                </div>
                            </div>
                            <div className="table_box">
                                <TableContainer style={{ borderRadius: "8px", border: "1px solid #DBDBDB", height: "100%" }} component={Paper}>
                                    <Table stickyHeader aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell>Product</StyledTableCell>
                                                <StyledTableCell align="right">Reevenue ($)</StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.name}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell align="right">{row.calories}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </div>
                        <div className="detail_box">
                            <div className="chart_box">
                                <div className="heading">
                                    Top Products by Revenue ($)
                                </div>
                                <div className="chart">
                                    <Line style={{ height: "280px" }} options={options} data={data} />
                                </div>
                            </div>
                            <div className="table_box">
                                <TableContainer style={{ borderRadius: "8px", border: "1px solid #DBDBDB", height: "100%" }} component={Paper}>
                                    <Table stickyHeader aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell>Product</StyledTableCell>
                                                <StyledTableCell align="right">Reevenue ($)</StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.name}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell align="right">{row.calories}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </div>
                        <div className="detail_box">
                            <div className="chart_box">
                                <div className="heading">
                                    Top Products by Revenue ($)
                                </div>
                                <div className="chart">
                                    <Line style={{ height: "280px" }} options={options} data={data} />
                                </div>
                            </div>
                            <div className="table_box">
                                <TableContainer style={{ borderRadius: "8px", border: "1px solid #DBDBDB", height: "100%" }} component={Paper}>
                                    <Table stickyHeader aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell>Product</StyledTableCell>
                                                <StyledTableCell align="right">Reevenue ($)</StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.name}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell align="right">{row.calories}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </div>
                        <div className="detail_box">
                            <div className="chart_box">
                                <div className="heading">
                                    Top Products by Revenue ($)
                                </div>
                                <div className="chart">
                                    <Line style={{ height: "280px" }} options={options} data={data} />
                                </div>
                            </div>
                            <div className="table_box">
                                <TableContainer style={{ borderRadius: "8px", border: "1px solid #DBDBDB", height: "100%" }} component={Paper}>
                                    <Table stickyHeader aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell>Product</StyledTableCell>
                                                <StyledTableCell align="right">Reevenue ($)</StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.name}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell align="right">{row.calories}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default InventoryAnalytics