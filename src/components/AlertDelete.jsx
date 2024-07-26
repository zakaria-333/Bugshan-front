import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from "@mui/material";
import DeleteIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const AlertDelete = ({text1,text2}) => {
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


      <Button onClick={handleClickOpen} sx={{
        fontSize: 12, backgroundColor: theme.palette.error.light, color: theme.palette.text.primary

      }} startIcon={<DeleteOutlineOutlinedIcon />}>
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        <DialogTitle id="alert-dialog-title">
        {/* "Are you sure you want to delete this user? */}
          {text1}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          {/* After clicking on 'Agree,' this user will be permanently deleted and cannot be recovered. */}
          {text2}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default AlertDelete
