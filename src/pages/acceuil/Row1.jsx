import { Paper, Stack, Typography } from '@mui/material'
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import AddHomeWorkOutlinedIcon from '@mui/icons-material/AddHomeWorkOutlined';

const Row1 = () => {
    return (
        <Stack direction={'row'} sx={{ justifyContent: 'center',mt:'30px' }}>
            <Paper sx={{ minWidth: '31%',mr:'20px', p: 1.5, display: 'flex', justifyContent: 'space-between' }}>
                <Stack gap={1}>
                    <AccountBoxOutlinedIcon sx={{ width: '50px', height: '50px' }} />
                    <Typography sx={{ fontSize: '20px' }}>Total of Users</Typography>

                </Stack>
                <Stack gap={1}>
                    <Typography sx={{ fontSize: '30px', m: '20px' }}>+45</Typography>
                </Stack>


            </Paper>
            <Paper sx={{ minWidth: '31%',mr:'20px', p: 1.5, display: 'flex', justifyContent: 'space-between' }}>
                <Stack gap={1}>
                    <ApartmentOutlinedIcon sx={{ width: '50px', height: '50px' }} />
                    <Typography sx={{ fontSize: '20px' }}>Total of Subsidiaries</Typography>

                </Stack>
                <Stack gap={1}>
                    <Typography sx={{ fontSize: '30px', m: '20px' }}>+15</Typography>
                </Stack>
            </Paper>
            <Paper sx={{ minWidth: '31%',mr:'16px', p: 1.5, display: 'flex', justifyContent: 'space-between' }}>
                <Stack gap={1}>
                    < AddHomeWorkOutlinedIcon sx={{ width: '50px', height: '50px' }} />
                    <Typography sx={{ fontSize: '20px' }}>Total of Sites</Typography>

                </Stack>
                <Stack gap={1}>
                    <Typography sx={{ fontSize: '30px', m: '20px' }}>+40</Typography>
                </Stack>
            </Paper>
           
        </Stack>
    )
}

export default Row1
