import React, {useState , useEffect} from "react";
import './App.css';
import Axios from "axios";
import Card from "./components/cards.js";

function App() {
  const [values, setValues] = useState();
  const [listVeiculos, setListVeiculos] = useState();
  console.log(listVeiculos)
  const handleChangeValues = (value) =>{
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }

  const handleClickButton = ()=>{
    Axios.post("http://localhost:3001/register",{
      name: values.name,
      type: values.type,
      color: values.color,
      year: values.year,
      plaque: values.plaque,
    }).then(()=>{
      setListVeiculos([
        ...listVeiculos,
        {
          name: values.name,
          type: values.type,
          color: values.color,
          year: values.year,
          plaque: values.plaque,
        }
      ])
    })
  }

  useEffect(()=>{
    Axios.get("http://localhost:3001/getCards").then((response)=>{
      setListVeiculos(response.data);
    })
  }, [])
  return (
    <div className="app--container">
      <div className='register--container'>
        <h1 className='cadastro--titulo'>Cadastro de Veículos</h1>
          <input 
            type="text" 
            name='name' 
            placeholder='Nome' 
            className='register--input' 
            onChange={ handleChangeValues }
          />
          <input 
            type="text" 
            name='type' 
            placeholder='Marca' 
            className='register--input'
            onChange={ handleChangeValues } 
          />
          <input 
            type="text" 
            name='color' 
            placeholder='Cor' 
            className='register--input' 
            onChange={ handleChangeValues }
          />
          <input 
            type="text" 
            name='year' 
            placeholder='Ano' 
            className='register--input' 
            onChange={ handleChangeValues }
          />
          <input 
            type="text" 
            name='plaque' 
            placeholder='Placa' 
            className='register--input' 
            onChange={ handleChangeValues }
          />
          <button className='bttn' onClick={()=> handleClickButton()}>Salvar</button>
      </div>
      { typeof listVeiculos !== "undefined" && listVeiculos.map((value)=>{
      return <Card 
        key={value.id}
        listVeiculos = {listVeiculos}
        setListVeiculos = {setListVeiculos}
        id = {value.idvaiculos}
        name = {value.name}
        type = {value.type}
        color = {value.color}
        year = {value.year}
        plaque = {value.plaque}
      ></Card>
      })}
    </div>
  );
}

export default App;
