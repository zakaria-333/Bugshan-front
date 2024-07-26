import * as React from 'react';
import Button from '@mui/material/Button';
import { Avatar, Box, useTheme } from "@mui/material";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import MenuItem from '@mui/material/MenuItem';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Picture from '../../components/Picture';

export default function PopUp({ action, data }) {
  const [open, setOpen] = React.useState(false);
  const [item, setItem] = React.useState('');
  



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setItem('');
  };
  const theme = useTheme();
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
  const currencies1 = [
    {
      label: 'el jadida',
    },
    {
      label: 'sidi banour',
    },
    {
      label: 'casa',
    }
    
  ];
  const handleChange = (event) => {
    setItem(event.target.value);
 
  };






  return (
    <React.Fragment>

      {action == 'Update' && <Button onClick={handleClickOpen} sx={{
        fontSize: 12, backgroundColor: theme.palette.success.light
        , color: theme.palette.text.primary

      }} startIcon={<BorderColorOutlinedIcon />}>
        Update
      </Button>}

      {action == 'Add User' && <Button onClick={handleClickOpen} sx={{
        width: '150px', margin: 1, fontSize: '16px', fontFamily: 'initial', bgcolor: theme.palette.mode == 'dark' ? 'white' : 'black', color: theme.palette.mode == 'dark' ? 'black' : 'white', '&:hover': {
          bgcolor: theme.palette.mode === 'dark' ? 'yellow' : 'darkblue',
          color: theme.palette.mode === 'dark' ? 'black' : 'white'
        }
      }} startIcon={<PersonAddAltIcon />}>
        {action}
      </Button>}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            // event.preventDefault();
            // const formData = new FormData(event.currentTarget);
            // const formJson = Object.fromEntries(formData.entries());
            // const email = formJson.email;
            // console.log(email);
            handleClose();
          },
        }}
      >
        {/* <DialogTitle sx={{ textAlign: 'center', fontSize: '22px' }}>Add User</DialogTitle> */}
        <DialogContent>
       

          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '29ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <div className='flex flex-col'>
                <Avatar sx={{ mx: "auto", width: 80, height: 60, border: "1px solid grey", my: 1 }} alt="Profile"
                  src={data.col1} >

                </Avatar>
                <Picture />
              </div>

              <TextField

                required
                id="outlined-required"
                label="First Name"
                defaultValue={data.col7}

              />
              <TextField
                required
                id="outlined-required"
                label="Last Name "
                defaultValue={data.col3}

              />
              <TextField
                required
                id="outlined-required"
                label="Email"
                defaultValue={data.col4}

              />
              <TextField
                required
                id="outlined-required"
                label="UserName"
                defaultValue={data.col5}


              />
              {action=='Add User' &&<TextField
                required
                id="outlined-required"
                label="Password"
                type='password'
                defaultValue={''}

              />}
              <TextField
                id="outlined-select-currency"
                select
                label="Role"
                defaultValue={data.col6}
                onChange={handleChange}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.label} value={option.label}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              {(item == 'Demandeur' || item == 'Directeur S' || data.col6 == 'Demandeur' || data.col6 == 'Directeur S') && <TextField
               
                select
                id="outlined-select-currency"
                label="Site"
                value={data.col7}>
                {currencies1.map((option) => (
                  
                  <MenuItem key={option.label} value={option.label}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>}





            </div>






          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
