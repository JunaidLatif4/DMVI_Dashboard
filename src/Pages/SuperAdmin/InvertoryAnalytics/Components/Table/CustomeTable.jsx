import React from 'react'

// MUI :
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

// CSS :
import "./CustomeTable.scss"





// Table Style :
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#E5E9EF",
        //   color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: "12px",
    },
}));

/////////////////////////////////////////////////////////
// Table Sample Data :
const Sample = [ 
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
//////////////////////////////////////////////////////



const CustomeTable = ({name , value , tableData}) => {
    return (
        <>
            <div className="table_container">
                <TableContainer style={{ borderRadius: "8px", border: "1px solid #DBDBDB", height: "100%" }} component={Paper}>
                    <Table stickyHeader aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>{name}</StyledTableCell>
                                <StyledTableCell align="right">{value}</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.value}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

export default CustomeTable