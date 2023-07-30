import React , { useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Header from './component/Header';
import { List, ListItem, ListItemText } from '@mui/material';
import TextList from './component/TextList';
import Input from './component/InputForm';
import InputForm from './component/InputForm';


const demoData = [
  { 
    id: '1',
    name: 'Mohan',
    phone: 947854612
  },

  { 
    id: '2',
    name: 'Rohan',
    phone: 941555588
  },

  { 
    id: '3',
    name: 'Mukesh',
    phone: 90047894
  }


]


function App() {

  const[ listData , setListData ] = useState( demoData );

  const saveDataHandler = (data) => {

      console.log( "In App.js ");
      console.log( data );
      
      setListData( [ ...listData , data ] );
  }

  const deleteItemHandler = (dataId) => {

    // Filtered the list 
    const filterList = listData.filter( ( item ) => item.id !== dataId );

    setListData( filterList );

  }

  return (

    <Container maxWidth = "sm">
      
      <Header />

      <InputForm  onSaveData = { saveDataHandler } />

      <TextList content = { listData } onDelete = { deleteItemHandler } />

    </Container>
    
  );
}

export default App;
