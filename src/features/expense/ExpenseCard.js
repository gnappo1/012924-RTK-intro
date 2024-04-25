import React from 'react'

const ExpenseCard = ({id, type, amount, notes}) => {
  return (
    <div>
        <span>{type}</span>
        <span>{amount}</span>
        <p>{notes}</p>
    </div>
  )
}

export default ExpenseCard