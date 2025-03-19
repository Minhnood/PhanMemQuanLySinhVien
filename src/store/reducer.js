import { createSlice } from "@reduxjs/toolkit";
import students from "../mocks/Students";

const STORAGE_KEY = "students_data";
const storedData = localStorage.getItem(STORAGE_KEY);
const initialState = storedData ? JSON.parse(storedData) : {
    list: [...students],
    strSearch: '',
    filteryear: 0,
    filterBirthYear: "",
    filterPayment: [],
    filterScore: {min: 0, max: 0},
    filteractEligibility: [],
    itemSelected: null,
};

const saveToLocalStorage = (state) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

const slice = createSlice({
    name: "List",
    initialState,
    reducers: {
        searchStudent(state, action) {
            state.strSearch = action.payload;
            saveToLocalStorage(state);
        },
        saveFrom(state, action) {
            let item = action.payload;
            const newFaqs = [...state.list];
            if (item.id) {
                const idx = newFaqs.findIndex((elm) => elm.id === item.id);
                newFaqs[idx] = item;
            } else {
                item.id = generateId();
                newFaqs.push(item);
            }
            state.list = newFaqs;
            saveToLocalStorage(state);
        },
        actDelete(state, action) {
            state.list = state.list.filter((item) => item.id !== action.payload);
            saveToLocalStorage(state);
        },
        actYear(state, action) {
            state.filteryear = action.payload;
            saveToLocalStorage(state);
        },
        actPayment(state, action) {
            state.filterPayment = action.payload;
            saveToLocalStorage(state);
        },
        actScore(state, action) {
            state.filterScore = action.payload;
            saveToLocalStorage(state);
        },
        actEligibility(state, action) {
            state.filteractEligibility = action.payload;
            saveToLocalStorage(state);
        },
        actBirthYear(state, action) {  
            state.filterBirthYear = action.payload; 
            saveToLocalStorage(state);
        },
        actEdit(state, action) {  
            state.itemSelected = action.payload; 
            saveToLocalStorage(state);
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