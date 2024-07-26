
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',

  overflow: 'hidden',
  
  justifyContent: 'center',

  width: "30px",
});

export default function Picture() {
  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      sx={{ marginBottom: '8px'}}
     
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload Picture
      <VisuallyHiddenInput type="file" />
    </Button>
  );
}
