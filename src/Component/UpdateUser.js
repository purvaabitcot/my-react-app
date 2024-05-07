import { Container, Paper, Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Form from "./Form";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import SimpleReactValidator from "simple-react-validator";
import { UserUpdate } from "../Redux/Actions/userActions";

const UpdateUser = () => {
  const { id } = useParams();
  const { users } = useSelector((state) => state);
  const [form, setForm] = useState({});
  const [showForm, setShowForm] = useState(false);
  const simpleValidator = useRef(new SimpleReactValidator());
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      debugger;
      const existingUser = users.find((user) => user.id === id);
      if (existingUser) {
        setForm(existingUser);
        setShowForm(true);
      }
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValid = simpleValidator.current.allValid();
    if (formValid) {
      toast("Data Updated Successfully");
      dispatch(UserUpdate(form));
      console.log(form);
      setForm("");
      navigate(-1);
    }else{
      toast("All Fields are mandatory to be filled")
    }
  };

  return (
    <Container>
      <Paper component={Box} padding={3} position={"relative"} top={200}>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: 30,
            fontWeight: "bold",
            color: "red",
          }}
        >
          Update User !
        </Typography>
        <Form
          form={form}
          handleChange={handleChange}
          simpleValidator={simpleValidator}
          handleSubmit={handleSubmit}
          showForm={showForm}
        />
      </Paper>
    </Container>
  );
};

export default UpdateUser;
