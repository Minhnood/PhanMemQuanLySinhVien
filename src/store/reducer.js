import { createSlice } from "@reduxjs/toolkit";
import students from "../mocks/Students";

const initialState = {
    list: [...students],
    strSearch: '',
    filteryear: 0,
    filterPayment: [],
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
            console.log(item);
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
    }
});

// Hàm tạo ID số nguyên dựa trên độ dài danh sách
function generateId(currentLength) {
    return currentLength + 1;
}

const { reducer, actions } = slice;
export const { searchStudent, saveFrom, actDelete, actYear, actPayment } = actions;
export default reducer;
