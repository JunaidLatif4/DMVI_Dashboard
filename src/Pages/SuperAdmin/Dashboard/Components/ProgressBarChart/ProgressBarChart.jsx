import React from 'react'

// MUI :
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import CircularProgress, { circularProgressClasses, CircularProgressProps } from '@mui/material/CircularProgress';

// CSS :
import "./ProgressBarChart.scss"





// MUI Custome Styled Components :
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

//////////////////////////////////////////////////////////////////
// Sample ProgressBarData :
let Sample = [
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
/////////////////////////////////////////////////////////////////////////
const ProgressBarChart = ({ title, progressBarData }) => {
    return (
        <>
            <div className="progressbarchart_container">
                <div className='title'>
                    {title}
                </div>
                <div className='bars'>
                    {
                        progressBarData.map((data) => {
                            return (
                                <>
                                    <div className='bar'>
                                        <div className='bar_title'>
                                            {data.title}
                                        </div>
                                        <Box sx={{ flexGrow: 1 }}>
                                            <BorderLinearProgress color={"primary"} variant="determinate" value={data.value} />
                                        </Box>
                                        <div className='bar_percent'>
                                            {data.value}%
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ProgressBarChart