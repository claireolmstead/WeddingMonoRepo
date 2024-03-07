import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import { Alert, AlertColor, Snackbar } from '@mui/material';
import React from 'react';

const AlertBody = styled.span`
  align-self: center;
  display: flex;
  gap: 30px;
`;

interface ToastProps {
  isOpen: boolean;
  close: () => void;
  severity: AlertColor;
  message: string;
}

const Toast = ({ isOpen, close, severity, message }: ToastProps) => {
  return (
    <Snackbar open={isOpen} autoHideDuration={3000} onClose={close}>
      <Alert onClick={close} severity={severity}>
        <AlertBody>
          {message}
          <CloseIcon fontSize="small" style={{ cursor: 'pointer' }} />
        </AlertBody>
      </Alert>
    </Snackbar>
  );
};

export default Toast;
