import { createSlice } from "@reduxjs/toolkit";
import students from "../mocks/Students";

const initialState = {
    list: [...students],
    strSearch: '',
    filterStatus: [],
    filterCategory: []
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
            item.id = generateId(state.list.length); // Tạo ID đơn giản
            newFaqs.push(item); // Cập nhật trực tiếp Redux Toolkit cho phép
            state.list = newFaqs;
        }
    }
});

// Hàm tạo ID số nguyên dựa trên độ dài danh sách
function generateId(currentLength) {
    return currentLength + 1;
}

const { reducer, actions } = slice;
export const { searchStudent, saveFrom } = actions;
export default reducer;
