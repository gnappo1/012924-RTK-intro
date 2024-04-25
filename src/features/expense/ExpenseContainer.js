import {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchExpenses, selectExpenses } from './expenseSlice'
import ExpenseCard from './ExpenseCard'

const ExpenseContainer = () => {
    const dispatch = useDispatch()
    const expenses = useSelector(selectExpenses)

    useEffect(() => {
        dispatch(fetchExpenses())
    }, [dispatch])

    const mappedExpenses = expenses.map(expense => <ExpenseCard key={expense.id} {...expense} />)

    return (
        <div>{mappedExpenses}</div>
    )
}

export default ExpenseContainer