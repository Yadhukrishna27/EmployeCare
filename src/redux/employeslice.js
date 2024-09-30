import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const employeslice=createSlice({
    name:"employe",
    initialState:{
        employe:[]
    },
    reducers:{
        addData(state,action){
            const sameID = state.employe.filter(item=>item.id==action.payload.id)
            console.log(sameID);
            if(sameID.length>0){
                toast.error("Entered ID is Alredy in Use !!")
            }else{
                state.employe.push(action.payload)
                toast.success("Added")
            }
        },
        deleteData(state,action){
            state.employe=state.employe.filter(item=>item.id!=action.payload)
            toast.error("Deleted")
        },
        updateData(state,action){
            state.employe=state.employe.filter(item=>item.id!=action.payload.id)
            state.employe.push(action.payload)
            toast.success("Update Success")
        }
    }

})

export default employeslice.reducer
export const {addData,deleteData,updateData}=employeslice.actions