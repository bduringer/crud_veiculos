import React from "react";
import "./cards.css"
import FormDialog from "./dialog/dialog";


export default function Card(props){
    const [open, setOpen] = React.useState(false);
    const handleClickCard = ()=>{
        setOpen(true);
    }
    return (
    <>
    <FormDialog open = {open} setOpen= {setOpen} 
    name={props.name} 
    type= {props.type}
    color = {props.color}
    year = {props.year}
    plaque = {props.plaque}
    listCard = {props.listCard}
    setListCard = {props.setListCard} 
    id = {props.id} />
    <div className="card--container"onClick={()=>{
        handleClickCard();
    }}>
        <p className="card--title">Nome: <br></br></p>
        <div className="card--item">{props.name}</div>
        <p className="card--title">Marca: <br></br></p>
        <div className="card--item">{props.type}</div>
        <p className="card--title">Cor: <br></br></p>
        <div className="card--item">{props.color}</div>
        <p className="card--title">Ano: <br></br></p>
        <div className="card--item">{props.year}</div>
        <p className="card--title">Placa: <br></br></p>
        <div className="card--item">{props.plaque}</div>
    </div>
    </>    
    )
}