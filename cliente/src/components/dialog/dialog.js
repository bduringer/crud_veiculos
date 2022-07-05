import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Axios from "axios";

export default function FormDialog(props) {
    const [editValues, setEditValues] = React.useState({
        id: props.id,
        name: props.name,
        type: props.type,
        color: props.color,
        year: props.year,
        plaque: props.plaque
    });

    const handleEditVeiculo = ()=>{
        Axios.put("http://localhost:3001/edit",{
            id: editValues.id,
            name: editValues.name,
            type: editValues.type,
            color: editValues.color,
            year: editValues.year,
            plaque: editValues.plaque    
        });
        handleClose();
    }

    const handleDeleteVeiculo =  ()=>{
        Axios.delete(`http://localhost:3001/delete/${editValues.id}`);
        handleClose();
    }

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleChangeValues = value =>{
    setEditValues(prevValues=>({
        ...prevValues,
        [value.target.id]: value.target.value,
    })
    )
}

  return (
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>Editar</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome do proprietário"
            defaultValue={props.name}
            onChange = {handleChangeValues}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="type"
            label="Marca do veículo"
            defaultValue={props.type}
            onChange = {handleChangeValues}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="color"
            label="Cor do veículo"
            defaultValue={props.color}
            onChange = {handleChangeValues}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="year"
            label="Ano"
            defaultValue={props.year}
            onChange = {handleChangeValues}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="plaque"
            label="Placa"
            defaultValue={props.plaque}
            onChange = {handleChangeValues}
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleEditVeiculo}>Salvar</Button>
          <Button onClick={handleDeleteVeiculo}>Excluir</Button>
        </DialogActions>
      </Dialog>
  );
}
