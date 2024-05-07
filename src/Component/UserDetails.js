import { Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../Redux/Actions/userActions';

const UserDetails = () => {
  const {users} = useSelector((state)=>state);
  console.log("state is : ",users);

  const dispatch = useDispatch() 
  const handleDelete = (id) =>{
    let updatedUsers = users?.filter((val)=> val.id !== id)
    dispatch(deleteUser(updatedUsers))
  }
  return (
    <Container>
      <Link to="/adduser" className='btn btn-dark fw-bold text-white m-5'>Add_User</Link>
      <Typography sx={{color : "red",fontSize : 40,textAlign : "center"}}>User Details</Typography>
     <TableContainer component={Box} marginTop={2} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S.No.</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Password</TableCell>
            <TableCell>ContactNumber</TableCell>
            <TableCell>Age</TableCell>
           <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.length  ? users?.map((user,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >{index+1}</TableCell>
              <TableCell >{user.name}</TableCell>
              <TableCell >{user.email}</TableCell>
              <TableCell >{user.password}</TableCell>
              <TableCell >{user.phoneNumber}</TableCell>
              <TableCell >{user.age}</TableCell>
              <TableCell sx={{display : 'flex'}} ><Link to={`/update/${user?.id}`} className='btn btn-success fw-bold text-white me-2'>Edit</Link><button onClick={()=>handleDelete(user?.id)}  className='btn btn-danger fw-bold text-white'>Remove</button></TableCell>
            </TableRow>
          )) :
           <p>No Data Found</p>
          }
        </TableBody>
      </Table>
    </TableContainer>

    </Container>
  )
}

export default UserDetails;