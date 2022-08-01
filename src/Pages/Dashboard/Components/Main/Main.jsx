
import React from 'react'

// MUI imports
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import CircularProgress, {
    circularProgressClasses,
    CircularProgressProps,
} from '@mui/material/CircularProgress';
// chartjs 2 imports 
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";

// icons pic from assets
import User from '../../../../Assets/User.png'
import Collapse from '../../../../Assets/collapse.png'
import Bell from '../../../../Assets/bell.png'

import './Main.scss'

// Donut Charts Function 
ChartJS.register(ArcElement, Tooltip, Legend);

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


// MUI function

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

function FacebookCircularProgress(props: CircularProgressProps) {
    return (
        <Box sx={{ position: 'relative' }}>
            <CircularProgress
                variant="determinate"
                sx={{
                    color: (theme) =>
                        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
                }}
                size={40}
                thickness={4}
                {...props}
                value={100}
            />
            <CircularProgress
                variant="indeterminate"
                disableShrink
                sx={{
                    color: (theme) => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'),
                    animationDuration: '550ms',
                    position: 'absolute',
                    left: 0,
                    [`& .${circularProgressClasses.circle}`]: {
                        strokeLinecap: 'round',
                    },
                }}
                size={40}
                thickness={4}
                {...props}
            />
        </Box>
    );
}

const Main = () => {
    const onClick = (e) => {
        console.log(e);
    };
    return (
        <div className='pie_chart_container_main'>

            {/* main of title and icon div content */}
            <div className="topbar_container">
                <div className="tabs_box">
                    <div className="tab" style={{ color: "#274C7E", borderBottom: "2px solid #274C7E" }}>
                        Dashboard
                    </div>
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
            {/* title and icon div ends here */}

            {/* card of pie_chart page div main start */}

            <div className='pie_chart_containter_cards_main'>

                {/* card 1 */}
                <div className='pie_chart_first_card_main'>
                    <div className='card_content'>
                        <div className='card_title'>
                            Online vending machines
                        </div>
                        <div className='card_number'>
                            <span className='card_bold'>0/</span>34
                        </div>
                        <div className='card_result'>
                            0% of vending machines are online
                        </div>
                    </div>
                </div>

                {/* card 2 */}
                <div className='pie_chart_second_card_main'>
                    <div className='card_content'>
                        <div className='card_title'>
                            Products out of stock
                        </div>
                        <div className='card_number'>
                            <span className='card_bold'>7/</span>50
                        </div>
                        <div className='card_result'>
                            Across all vending machines
                        </div>
                    </div>
                </div>

                {/* card 3  */}
                <div className='pie_chart_third_card_main'>
                    <div className='card_content'>
                        <div className='card_title'>
                            Total product inventory
                        </div>
                        <div className='card_number'>
                            <span className='card_bold'>579/</span>6.10K
                        </div>
                        <div className='card_result'>
                            Across all vending machines
                        </div>
                    </div>
                </div>

                {/* card 4  */}
                <div className='pie_chart_fourth_card_main'>
                    <div className='card_content'>
                        <div className='card_title'>
                            Stock current value
                        </div>
                        <div className='card_number'>
                            $10.03M
                        </div>
                        <div className='card_result'>
                            Across all vending machines
                        </div>
                    </div>
                </div>


            </div>

            {/* pie_chart card end here */}


            {/* pie chart Bars and charts start from there  */}

            <div className='pie_charts_chart_section_main'>

                {/* donut_chart section start from here  */}

                <div className='donut_chart_section_main'>
                    <div className='left_donut_chart'>
                        <div className='left_content'>
                            <div className='chart_title'>
                                Products Stock Status
                            </div>
                            <div className='donut_left'>

                                <Doughnut data={data} onClick={(e) => onClick(e)} />;
                            </div>
                            <div className='left_donut_color_dots_main'>
                                <div className='dot_1'>
                                    <div className='dot'> </div>
                                    <div className='dot_title'>
                                        In Stock
                                    </div>
                                </div>
                                <div className='dot_2'>
                                    <div className='dot'> </div>
                                    <div className='dot_title'>
                                        Running Low
                                    </div>
                                </div>
                                <div className='dot_3'>
                                    <div className='dot'> </div>
                                    <div className='dot_title'>
                                        Out of Stock
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='centre_line'></div>
                    <div className='right_donut_chart'>
                        <div className='right_content'>
                            <div className='chart_title'>
                                Vending Machines Stock Status
                            </div>
                            <div className='donut_right'>

                                <Doughnut data={vendingdata} onClick={(e) => onClick(e)} />;
                            </div>
                            <div className='right_donut_color_dots_main'>
                                <div className='dot_1'>
                                    <div className='dot'> </div>
                                    <div className='dot_title'>
                                        In Stock
                                    </div>
                                </div>
                                <div className='dot_2'>
                                    <div className='dot'> </div>
                                    <div className='dot_title'>
                                        Running Low
                                    </div>
                                </div>
                                <div className='dot_3'>
                                    <div className='dot'> </div>
                                    <div className='dot_title'>
                                        Out of Stock
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Progress Bar Section Start from here */}
                <div className='pie_chart_bar_section_main'>
                    <div className='section_title'>
                        Item availibility on vending machines
                    </div>

                    <div className='bar_content'>
                        <div className='green_bar'>
                            <div className='bar_title'>
                                CAMEL
                            </div>

                            <Box sx={{ flexGrow: 1 }}>

                                <BorderLinearProgress variant="determinate" value={100} />
                            </Box>

                            <div className='bar_percent'>
                                100%
                            </div>
                        </div>
                        <div className='green_bar'>
                            <div className='bar_title'>
                                UFC
                            </div>

                            <Box sx={{ flexGrow: 1 }}>

                                <BorderLinearProgress variant="determinate" value={90} />
                            </Box>

                            <div className='bar_percent'>
                                60%
                            </div>
                        </div>
                        <div className='green_bar'>
                            <div className='bar_title'>
                                UFC
                            </div>

                            <Box sx={{ flexGrow: 1 }}>

                                <BorderLinearProgress variant="determinate" value={50} />
                            </Box>

                            <div className='bar_percent'>
                                50%
                            </div>
                        </div>
                        <div className='green_bar'>
                            <div className='bar_title'>
                                VUSE
                            </div>

                            <Box sx={{ flexGrow: 1 }}>

                                <BorderLinearProgress variant="determinate" value={40} />
                            </Box>

                            <div className='bar_percent'>
                                40%
                            </div>
                        </div>
                        <div className='green_bar'>
                            <div className='bar_title'>
                                Coke
                            </div>

                            <Box sx={{ flexGrow: 1 }}>

                                <BorderLinearProgress variant="determinate" value={40} />
                            </Box>

                            <div className='bar_percent'>
                                40%
                            </div>
                        </div>
                        <div className='green_bar'>
                            <div className='bar_title'>
                                UFC
                            </div>

                            <Box sx={{ flexGrow: 1 }}>

                                <BorderLinearProgress variant="determinate" value={40} />
                            </Box>

                            <div className='bar_percent'>
                                40%
                            </div>
                        </div>
                        <div className='green_bar'>
                            <div className='bar_title'>
                                PROD
                            </div>

                            <Box sx={{ flexGrow: 1 }}>

                                <BorderLinearProgress variant="determinate" value={40} />
                            </Box>

                            <div className='bar_percent'>
                                40%
                            </div>
                        </div>
                        <div className='green_bar'>
                            <div className='bar_title'>
                                Diet
                            </div>

                            <Box sx={{ flexGrow: 1 }}>

                                <BorderLinearProgress variant="determinate" value={40} />
                            </Box>

                            <div className='bar_percent'>
                                40%
                            </div>
                        </div>
                        <div className='green_bar'>
                            <div className='bar_title'>
                                UFC
                            </div>

                            <Box sx={{ flexGrow: 1 }}>

                                <BorderLinearProgress variant="determinate" value={40} />
                            </Box>

                            <div className='bar_percent'>
                                40%
                            </div>
                        </div>
                        <div className='green_bar'>
                            <div className='bar_title'>
                                UFC
                            </div>

                            <Box sx={{ flexGrow: 1 }}>

                                <BorderLinearProgress variant="determinate" value={40} />
                            </Box>

                            <div className='bar_percent'>
                                40%
                            </div>
                        </div>
                        <div className='green_bar'>
                            <div className='bar_title'>
                                VUSE
                            </div>

                            <Box sx={{ flexGrow: 1 }}>

                                <BorderLinearProgress variant="determinate" value={40} />
                            </Box>

                            <div className='bar_percent'>
                                40%
                            </div>
                        </div>
                        <div className='orange_bar'>
                            <div className='bar_title'>
                                VUSE
                            </div>

                            <Box sx={{ flexGrow: 1 }}>

                                <BorderLinearProgress variant="determinate" value={40} />
                            </Box>

                            <div className='bar_percent'>
                                40%
                            </div>
                        </div>
                        <div className='orange_bar'>
                            <div className='bar_title'>
                                UFC
                            </div>

                            <Box sx={{ flexGrow: 1 }}>

                                <BorderLinearProgress variant="determinate" value={40} />
                            </Box>

                            <div className='bar_percent'>
                                40%
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Main