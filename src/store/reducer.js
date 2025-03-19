import { createSlice } from "@reduxjs/toolkit";
import students from "../mocks/Students";

const initialState = {
    list: [...students],
    strSearch: '',
    filteryear: 0,
    filterBirthYear: "",
    filterPayment: [],
    filterScore: {min: 0, max: 0},
    filteractEligibility: []
};

const slice = createSlice({
    name: "List",
    initialState,
    reducers: {
        searchStudent(state, action) {
            state.strSearch = action.payload;
        },
        saveFrom(state, action) {
            let item = action.payload;
            const newFaqs = [...state.list];
            item.id = generateId(state.list.length);
            newFaqs.push(item);
            state.list = newFaqs;
        },
        actDelete(state, action) {
            const newItems = state.list.filter((item) => item.id !== action.payload);
            state.list = newItems;
        },
        actYear(state, action) {
           state.filteryear = action.payload;
        },
        actPayment(state, action) {
            state.filterPayment = action.payload;
         },
        actScore(state, action) {
            state.filterScore = action.payload;
         },
        actEligibility(state, action) {
            state.filteractEligibility = action.payload;
         },
        actBirthYear(state, action) {  
            state.filterBirthYear = action.payload; 
        },
    }
});

function generateId(currentLength) {
    return currentLength + 1;
}

const { reducer, actions } = slice;
export const { searchStudent, saveFrom, actDelete, actYear, actPayment, actScore, actEligibility, actBirthYear } = actions;
export default reducer;
