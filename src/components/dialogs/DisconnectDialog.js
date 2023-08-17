import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
} from "@mui/material";

function DisconnectDialog({ open, onClose, logout }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <DialogContentText>
          Voulez-vous vraiment vous déconnecter ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Annuler
        </Button>
        <Button onClick={logout} color="secondary">
          Déconnexion
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DisconnectDialog;
