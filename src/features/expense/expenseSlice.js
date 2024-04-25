import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getExpenses } from './expenseApi';

const initialState = {
    data: [],
    status: 'idle',
    errors: []
}

export const fetchExpenses = createAsyncThunk(
    "expense/fetchExpenses",
    async () => {
        const response = await getExpenses()
        return response
    }
)

export const expenseSlice = createSlice({
    name: "expense",
    initialState,
    reducers: {
        addExpense: (state, action) => {
            state.data.push(action.payload)
        },
        removeExpense: (state, action) => {
            state.data = state.data.filter(expense => expense.id !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchExpenses.pending, (state) => {
                state.status = 'loading'
                state.errors = []
            })
            .addCase(fetchExpenses.fulfilled, (state, action) => {
                state.status = 'idle'
                state.data = action.payload
            })
            .addCase(fetchExpenses.rejected, (state, action) => {
                state.status = 'idle'
                state.errors.push(action.error.message)
            })
    }
})

export const selectExpenses = (state) => state.expense.data
export const selectExpenseErrors = (state) => state.expense.errors
export const { addExpense, removeExpense } = expenseSlice.actions
export default expenseSlice.reducer