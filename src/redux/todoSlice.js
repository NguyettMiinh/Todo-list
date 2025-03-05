// create slice : 
// - contains a set of actions and reducer that handles those actions
// -use a state, initialState

// action.payload gia tri duoc truyen vao ham addTodo
import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        title: "#Task 1",
        description: "HTML,CSS",
        dueDate: "10-02-2025",
        status: false,
        radio: true,
        select: 1
    },
    reducers: {
        edit: (state, action) =>{

        }
    }
})
export const reducer = todoSlice.reducer;