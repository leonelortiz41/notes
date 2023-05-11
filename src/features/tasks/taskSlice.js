import { createSlice } from "@reduxjs/toolkit"

const initialState = JSON.parse(localStorage.getItem("tasks"))||[]


export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
            localStorage.setItem("tasks",JSON.stringify(state))
        },
        removeTask: (state, action) => {
            const found = state.find(task => task.id === action.payload.id)
            state.splice(state.indexOf(found), 1)
            localStorage.setItem("tasks",JSON.stringify(state))
        },
        editTask: (state, action) => {
            const {id,title,description}= action.payload
            const found = state.find(task => task.id === id)
            if(found){
                found.title=title;
                found.description=description;
            }
            localStorage.setItem("tasks",JSON.stringify(state))

        },
    },
})

export const { addTask, removeTask, editTask } = taskSlice.actions
export default taskSlice.reducer