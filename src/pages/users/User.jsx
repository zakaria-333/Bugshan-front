
import { DataGrid, GridToolbar, GridToolbarContainer } from "@mui/x-data-grid"
import { rows } from "./data";
import '../../index.css'
import { Box, Typography, useTheme, Avatar, TextField, MenuItem } from "@mui/material";
import Button from '@mui/material/Button';
import AlertDelete from "../../components/AlertDelete";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import PopUp from "./PopUp";
import React from "react";







const User = () => {
  const theme = useTheme();
  const [item, setItem] = React.useState('');

  const currencies = [
    {
      label: 'Admin',
    },
    {
      label: 'Demandeur',
    },
    {
      label: 'Directeur A',
    },
    {
      label: 'Directeur S',
    },
    ,
    {
      label: 'Directeur G',
    },
    {
      label: 'Directeur F',
    }
  ];
  const handleChange = (event) => {
    setItem(event.target.value);
  };
  


  const columns = [
    {
      field: 'col1', headerName: 'Picture', width: 80, align: 'center', headerAlign: 'center', headerClassName: 'header-bold',
      renderCell: ({ row: { col1 } }) => {
        return (

          <Avatar sx={{ mx: "auto", width: 40, height: 40, border: "1px solid grey", my: 1 }} alt="Profile"
            src={col1} />

        )
      }
    },
    { field: 'col2', headerName: 'First Name', flex: 1, align: 'center', headerAlign: 'center', headerClassName: 'header-bold' },
    { field: 'col3', headerName: 'Last Name', flex: 1, align: 'center', headerAlign: 'center', headerClassName: 'header-bold' },
    { field: 'col4', headerName: 'UserName', width: 110, align: 'center', headerAlign: 'center', headerClassName: 'header-bold' },
    { field: 'col5', headerName: 'Email', width: 220, align: 'center', headerAlign: 'center', headerClassName: 'header-bold' },
    {
      field: 'col6', headerName: 'Role', flex: 1, align: 'center', headerAlign: 'center', headerClassName: 'header-bold',
      renderCell: ({ row: { col6 } }) => {
        return (<Box
          sx={{
            mt: '8px',
            p: '8px',
            width: '100px',
            borderRadius: '3px',
            textAlign: 'center',
            display: "flex",
            justifyContent: 'centre',
            alignItems: 'center',
            backgroundColor: col6 == 'Demandeur' ? theme.palette.warning.light : col6 == 'Directeur A' ? theme.palette.secondary.main : col6 == 'Directeur F' ? theme.palette.primary.main : col6 == 'Directeur G' ? theme.palette.warning.dark : theme.palette.info.dark
          }}>
          <VerifiedUserOutlinedIcon fontSize="small" />
          <Typography sx={{ fontSize: '13px' }}>{col6}</Typography>
        </Box>

        )
      }
    },
    { field: 'col7', headerName: 'Site', flex: 1, align: 'center', headerAlign: 'center', headerClassName: 'header-bold' },
    {
      field: 'col8', headerName: 'update', flex: 1, align: 'center', headerAlign: 'center', headerClassName: 'header-bold',

      renderCell: () => {
        return (<Button sx={{
          fontSize: 12, backgroundColor: theme.palette.success.light
          , color: theme.palette.text.primary

        }} startIcon={<BorderColorOutlinedIcon />}>
          Update
        </Button>

        )
      }
    },
    {
      field: 'col9', headerName: 'delete', flex: 1, align: 'center', headerAlign: 'center', headerClassName: 'header-bold',
      renderCell: () => {
        return (<AlertDelete text1={'Are you sure you want to delete this user?'} text2={'After clicking on Agree, this user will be permanently deleted and cannot be recovered.'} />

        )
      }
    },

  ];


  const CustomToolbar = () => {
    return (
      <GridToolbarContainer sx={{display:'flex',justifyContent:'space-between'}}>
        <GridToolbar />
        <PopUp/>
      </GridToolbarContainer>
    );
  };


  return (
    <div style={{ height: 600, width: '100%' }}>



      <DataGrid


        slots={{ toolbar: CustomToolbar }}
        rows={rows}
        // @ts-ignore
        columns={columns}
        // initialState={{
        //   pagination: {
        //     paginationModel: {
        //       pageSize: 5,
        //     },
        //   },
        // }} 
        />
    </div>
  )
}

export default User
