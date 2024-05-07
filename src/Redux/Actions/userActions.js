import { type } from "@testing-library/user-event/dist/type";
import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from "./actionTypes";

const addItem = (form) =>{
    return{
        type :ADD_ITEM,
        payload : form
    }
}

const deleteUser= (data) =>{
    return{
        type :DELETE_ITEM,
        payload : data
    }
}

const UserUpdate = (user) =>{
    return {
        type : UPDATE_ITEM,
        payload : user
    }
}
export { addItem , deleteUser,UserUpdate} ;