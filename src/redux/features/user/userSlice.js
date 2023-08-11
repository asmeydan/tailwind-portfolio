import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: {
        name: "",
        surname: "",
        age: 0,
        img: "https://loremflickr.com/cache/resized/65535_52734348179_c16e2d4caa_b_640_480_nofilter.jpg",
        job: ""
    }
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setName: (state, action)=> {
            state.user.name = action.payload
        },
        setSurname: (state, action)=> {
            state.user.surname = action.payload
        },
        setAge: (state, action)=> {
            state.user.age = action.payload
        },
        setImg: (state, action)=> {
            state.user.img = action.payload
        },
        setJob: (state, action)=> {
            state.user.job = action.payload
        }
    }
})

export const { setName, setSurname, setAge, setImg, setJob } = userSlice.actions
export default userSlice.reducer