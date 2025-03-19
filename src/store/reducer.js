import { createSlice } from "@reduxjs/toolkit";
import students from "../mocks/Students";

const initialState = {
    list: [...students],
    strSearch: '',
    filteryear: 0,
    filterBirthYear: "",
    filterPayment: [],
    filterScore: {min: 0, max: 0},
    filteractEligibility: [],
    itemSelected: null,
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
            if (item.id) {
                const idx = newFaqs.findIndex((elm) =>
                    elm.id === item.id
                );
                newFaqs[idx] = item;
            } else {
                item.id = generateId();
                newFaqs.push(item);
            }
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
        actEdit(state, action) {  
            state.itemSelected = action.payload; 
        },
    }
});

function generateId(length = 8) {
    const characters = '0123456789';
    let result = '010'; // Bắt đầu với "010"
    for (let i = 0; i < length - 3; i++) { // Chỉ cần tạo 5 số còn lại
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

const { reducer, actions } = slice;
export const { searchStudent, saveFrom, actDelete, actYear, actPayment, actScore, actEligibility, actBirthYear, actEdit } = actions;
export default reducer;
