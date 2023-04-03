import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

function DeleteMediaEventDialog({ open, onClose, onDelete }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirmer la suppression</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Êtes-vous sûr de vouloir supprimer ce media ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Annuler
        </Button>
        <Button onClick={onDelete} color="secondary">
          Supprimer
        </Button>
      </DialogActions>
    </Dialog>
  );
}

DeleteMediaEventDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteMediaEventDialog;
