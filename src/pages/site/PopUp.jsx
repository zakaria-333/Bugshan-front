import * as React from 'react';
import Button from '@mui/material/Button';
import { Avatar, Box, DialogTitle, useTheme } from "@mui/material";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import MenuItem from '@mui/material/MenuItem';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DomainAddOutlinedIcon from '@mui/icons-material/DomainAddOutlined';

export default function PopUp({ action, data }) {
  const [open, setOpen] = React.useState(false);





  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const theme = useTheme();

  const currencies1 = [
    {
      label: 'ghdjdfru',
    },
    {
      label: 'sidi banour',
    },
    {
      label: 'casa',
    }
    
  ];






  return (
    <React.Fragment>

      {action == 'Update' && <Button onClick={handleClickOpen} sx={{
        fontSize: 12, backgroundColor: theme.palette.success.light
        , color: theme.palette.text.primary

      }} startIcon={<BorderColorOutlinedIcon />}>
        Update
      </Button>}

      {action == 'Add Site' && <Button onClick={handleClickOpen} sx={{
        width: '140px', margin: 1, fontSize: '16px', fontFamily: 'initial', bgcolor: theme.palette.mode == 'dark' ? 'white' : 'black', color: theme.palette.mode == 'dark' ? 'black' : 'white', '&:hover': {
          bgcolor: theme.palette.mode === 'dark' ? 'yellow' : 'darkblue',
          color: theme.palette.mode === 'dark' ? 'black' : 'white'
        }
      }} startIcon={<DomainAddOutlinedIcon />}>
        Add Site
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
        <DialogTitle sx={{ textAlign: 'center', fontSize: '22px' }}>{action}</DialogTitle>
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


              <TextField

                required
                id="outlined-required"
                label="Code"
                defaultValue={data.col1}

              />
              <TextField
                required
                id="outlined-required"
                label="Name"
                defaultValue={data.col2}

              />
              <TextField

                required
                id="outlined-required"
                label="Ville"
                defaultValue={data.col3}

              />
              <TextField
                id="outlined-select-currency"
                select
                label="Subsidiary"
                defaultValue={data.col4}
                
              >
                {currencies1.map((option) => (
                  <MenuItem key={option.label} value={option.label}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>



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
