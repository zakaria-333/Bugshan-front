
import { DataGrid, GridToolbar , GridToolbarContainer} from "@mui/x-data-grid"
import '../../index.css'
import {  useTheme } from "@mui/material";
import Button from '@mui/material/Button';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { rows } from "./data";
import AlertDelete from "../../components/AlertDelete";
import DomainAddOutlinedIcon from '@mui/icons-material/DomainAddOutlined';





const Site = () => {
  const theme = useTheme();

  const CustomToolbar = () => {
    return (
      <GridToolbarContainer sx={{display:'flex',justifyContent:'space-between'}}>
        <GridToolbar />
        <Button sx={{width:'140px',margin:1,fontSize:'16px',fontFamily:'initial',bgcolor:theme.palette.mode=='dark'?'white':'black',color:theme.palette.mode=='dark'?'black':'white','&:hover': {
      bgcolor: theme.palette.mode === 'dark' ?  'yellow':'darkblue',
      color: theme.palette.mode === 'dark' ? 'black' : 'white'   
    }}} startIcon={<DomainAddOutlinedIcon />}>
          Add Site
        </Button>
      </GridToolbarContainer>
    );
  };
  

  const columns = [
    { field: 'id', headerName: 'Id', width:80, align: 'center', headerAlign: 'center', headerClassName: 'header-bold'},
    { field: 'col1', headerName: 'Code', flex: 1, align: 'center', headerAlign: 'center', headerClassName: 'header-bold' },
    { field: 'col2', headerName: 'Name', flex: 1, align: 'center', headerAlign: 'center', headerClassName: 'header-bold' },  
    { field: 'col3', headerName: 'Ville', flex: 1, align: 'center', headerAlign: 'center', headerClassName: 'header-bold' }, 
    { field: 'col4', headerName: 'Subsidiary', flex: 1, align: 'center', headerAlign: 'center', headerClassName: 'header-bold' }, 
    {
      field: 'col5', headerName: 'update', flex: 1, align: 'center', headerAlign: 'center', headerClassName: 'header-bold',

      renderCell: () => {
        return (
        <Button  sx={{fontSize:12,backgroundColor:theme.palette.success.light
          ,color:theme.palette.text.primary
          
        }} startIcon={<BorderColorOutlinedIcon />}>
          Update
        </Button>
        

        )
      }
    },
    {
      field: 'col6', headerName: 'delete', flex: 1, align: 'center', headerAlign: 'center', headerClassName: 'header-bold',
      renderCell: () => {
        return (<AlertDelete text1={'Are you sure you want to delete this site?'} text2={'After clicking on Agree, this site will be permanently deleted and cannot be recovered.'}/>
        

        )
      }
    },

  ];



  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
      slots={{ toolbar: CustomToolbar }}
       rows={rows}
        // @ts-ignore
        columns={columns} />
    </div>
  )
}

export default Site
