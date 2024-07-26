
import Row1 from './Row1'
import Row2 from './Row2'
import { Box, Button } from '@mui/material'
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';

const Home = () => {
  return (
    <div>
      <Box sx={{textAlign:'right',mr:'40px'}}>
      <Button variant="contained" endIcon={<BackupOutlinedIcon />}>
        DOWNLOAD REPORTS
      </Button>
      </Box>
      <Row1/>
      <Row2/>
    </div>
  )
}

export default Home
