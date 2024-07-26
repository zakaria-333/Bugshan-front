
import { DataGrid,  GridToolbar, GridToolbarContainer } from "@mui/x-data-grid"
import '../../index.css'

import { Box, Typography, useTheme,Avatar } from "@mui/material";
import AlertDelete from "../../components/AlertDelete";
import { rows } from "./data";
import PopUp from "./PopUp";






const Filiale = () => {
  const theme = useTheme();

  const CustomToolbar = () => {
    return (
      <GridToolbarContainer sx={{display:'flex',justifyContent:'space-between'}}>
        <GridToolbar />
        <PopUp action='Add Subsidiary' data={''}  />
        
      </GridToolbarContainer>
    );
  };
  

  const columns = [
    { field: 'id', headerName: 'Id', width:80, align: 'center', headerAlign: 'center', headerClassName: 'header-bold'},
    { field: 'col1', headerName: 'Code', flex: 1, align: 'center', headerAlign: 'center', headerClassName: 'header-bold' },
    { field: 'col2', headerName: 'Name', flex: 1, align: 'center', headerAlign: 'center', headerClassName: 'header-bold' },  
    {
      field: 'col3', headerName: 'update', flex: 1, align: 'center', headerAlign: 'center', headerClassName: 'header-bold',

      renderCell: (params) => {
        return (
<PopUp action='Update' data={params.row}  />
        )
      }
    },
    {
      field: 'col4', headerName: 'delete', flex: 1, align: 'center', headerAlign: 'center', headerClassName: 'header-bold',
      renderCell: () => {
        return (<AlertDelete text1={'Are you sure you want to delete this subsidiary?'} text2={'After clicking on Agree, this subsidiary will be permanently deleted and cannot be recovered.'}/>
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

export default Filiale
