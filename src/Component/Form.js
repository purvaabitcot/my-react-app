import { Box } from "@mui/material";



const Form = ({handleChange,handleSubmit,form,simpleValidator,showForm}) =>{


  return (
    <Box>
      <form onSubmit={handleSubmit}>
      <Box margin={3}>
        <label className="fw-bold text-danger">Enter Name :</label>
        <input
          type="text"
          placeholder="Enter Name"
          className="form-control"
          name="name"
          value={form.name}
          onChange={handleChange}
          onBlur={() => simpleValidator.current.showMessageFor("name")} />
         {simpleValidator.current.message("name", form.name, "required")}
        
      </Box>
      <Box  margin={3}>
        <label className="fw-bold text-danger">Enter email :</label>
        <input
          type="email"
          placeholder="Enter Email"
          className="form-control"
          name="email"
          value={form?.email}
          onChange={handleChange}
          onBlur={() => simpleValidator.current.showMessageFor("email")}/>
        
          {simpleValidator.current.message(
                "email",
                form.email,
                "required"
              )}
      
      </Box>
      <Box  margin={3}>
        <label className="fw-bold text-danger">Enter Password :</label>
        <input
          type="password"
          placeholder="Enter Password"
          className="form-control"
          name="password"
          value={form.password}
          onChange={handleChange}
          onBlur={()=>simpleValidator.current.showMessageFor('password')} />
          {simpleValidator.current.message('password',form.password, 'required')}
        
      </Box>
      <Box  margin={3}>
        <label className="fw-bold text-danger">Enter Contact Number :</label>
        <input
          type="text"
          placeholder="Enter Contact Number"
          className="form-control"
          name="phoneNumber"
          value = {form.phoneNumber}
          onChange={handleChange}
          onBlur={()=>simpleValidator.current.showMessageFor('phoneNumber')} />
          {simpleValidator.current.message('phoneNumber', form.phoneNumber, 'required')}
        
      </Box>
      <Box  margin={3}>
        <label className="fw-bold text-danger">Enter age :</label>
        <input
          type="number"
          placeholder="Enter Age"
          className="form-control"
          name="age"
          value={form.age}
          onChange={handleChange}
          onBlur={()=>simpleValidator.current.showMessageFor('age')} />
          {simpleValidator.current.message('age', form.age, 'required')}
        
      </Box>
      <Box  margin={3}>
          <button className=" btn btn-info form-control text-white">{showForm ? 'Update' : 'Add'}</button>
      </Box>
    </form>
     
    </Box>
  );
};

export default Form;
