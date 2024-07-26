import { Box, Paper } from '@mui/material'
import FilialeStatics from '../filialeStatics/FilialeStatics'
import SiteStatics from '../siteStatics/SiteStatics'
import UserStatics from '../staticsUser/UserStatics'
import { useNavigate } from 'react-router-dom'


const Row2 = () => {
    const navigate =useNavigate()
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Paper sx={{ width: '31%', m: '10px',mt:'20px', p: '10px' }}>
                <UserStatics />
            </Paper>
            <Paper sx={{ width: '31%', m: '10px',mt:'20px', p: '10px' }} >
                <div onClick={()=>{navigate('/filialeStatics')}}>
                    <FilialeStatics />
                </div>
            </Paper>
            <Paper sx={{ width: '31%', m: '10px',mt:'20px', p: '10px' }}>
                <SiteStatics />
            </Paper>
        </Box>
    )
}

export default Row2
