import * as React from 'react';
import Button from '@mui/material/Button';
import { Avatar, Box, DialogTitle, useTheme } from "@mui/material";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import MenuItem from '@mui/material/MenuItem';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export default function PopUp({ action, data }) {
  const [open, setOpen] = React.useState(false);





  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const theme = useTheme();

  






  return (
    <React.Fragment>

      {action == 'Update' && <Button onClick={handleClickOpen}  sx={{fontSize:12,backgroundColor:theme.palette.success.light
          ,color:theme.palette.text.primary
          
        }} startIcon={<BorderColorOutlinedIcon />}>
          Update
        </Button>}

      {action == 'Add Subsidiary' && <Button onClick={handleClickOpen} sx={{width:'200px',margin:1,fontSize:'16px',fontFamily:'initial',bgcolor:theme.palette.mode=='dark'?'white':'black',color:theme.palette.mode=='dark'?'black':'white','&:hover': {
      bgcolor: theme.palette.mode === 'dark' ?  'yellow':'darkblue',
      color: theme.palette.mode === 'dark' ? 'black' : 'white'   
    }}} startIcon={<AddCircleOutlineOutlinedIcon />}>
          Add Subsidiary
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
