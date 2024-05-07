import { Box, Container, Paper, Typography } from '@mui/material';
import React, { useRef, useState } from 'react'
import Form from './Form';

import { toast } from 'react-toastify';
import SimpleReactValidator from 'simple-react-validator';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, addUser } from '../Redux/Actions/userActions';
import { ADD_ITEM } from '../Redux/Actions/actionTypes';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {

  const randomAlphaNumeric = length => {
    let s = '';
    Array.from({ length }).some(() => {
      s += Math.random().toString(36).slice(2);
      return s.length >= length;
    });
    return s.slice(0, length);
  };


  const simpleValidator = useRef(new SimpleReactValidator());
  const state = useSelector((state)=>state);
  console.log("state is : ",state?.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const defaultUserForm = {
    name: "",
    email :"",
    password : "",
    phoneNumber : "",
    age:""
  }
  
  const[,forceUpdate] = useState();
  const [form,setForm] = useState([]);

  debugger
  const handleChange = (e)=>{
    const {name,value} = e.target;
    setForm({...form,[name] : value});
  }

  //for sumit the form
  const handleSubmit = (e) =>{
    
    e.preventDefault();
  
    console.log(form);
    
    const formValid = simpleValidator.current.allValid();
    if(formValid){

      toast.success("Data Added Successfully");
      dispatch(addItem({...form, id:randomAlphaNumeric(6)}))
      navigate("/")
      
    }else{
      console.log("Form not Valid");
      simpleValidator.current.showMessages();
      forceUpdate(1)
      toast.info("All fields are mandatory to be filled");
      return
      
    }
    setForm(defaultUserForm)
  
    
    
    

    }
  return (
    <Container >
      <Paper component={Box} padding={3} position={'relative'} top={100}>
        <Typography sx={{textAlign:"center", fontSize: 30,fontWeight : "bold",color : "red"}}>Add Users !</Typography>
          <Form handleChange = {handleChange} handleSubmit = {handleSubmit} form={form} simpleValidator = {simpleValidator}/>
        
      </Paper>
    </Container>
  )
}

export default AddUser;